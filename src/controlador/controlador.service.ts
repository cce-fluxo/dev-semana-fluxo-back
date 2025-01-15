import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho conforme sua estrutura
import { AlgoritmoService } from 'src/algoritmo/algoritmo.service';


@Injectable()
export class ControladorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly algoritmoService: AlgoritmoService,
  ) {}

  async processarRespostas(usuarioId: number, metodoEnvio: string, respostas: { perguntaId: number; respostaId: number }[]) {
    try {
      // 1. Validações iniciais
      if (!usuarioId || !respostas || respostas.length === 0) {
        throw new Error('Dados inválidos: Usuário ou respostas estão ausentes.');
      }

      // 2. Criar as entradas na tabela Resposta_escolhida
      const entradasRespostaEscolhida = respostas.map((resposta) => ({
        id_usuario: usuarioId,
        id_pergunta: resposta.perguntaId,
        id_resposta: resposta.respostaId,
      }));

      await this.prisma.resposta_escolhida.createMany({
        data: entradasRespostaEscolhida,
      });

      // 3. Chamar o algoritmo de recomendação
      const palestrasRecomendas = await this.algoritmoService.recomendarPalestras(usuarioId);

      // 4. Montar o cronograma
      // Seleciona as 5 primeiras palestras
      const palestrasSelecionadas = palestrasRecomendas.slice(0, 3);

      // Cria o cronograma e associa as palestras a ele
      const cronograma = await this.prisma.cronograma.create({
        data: {
          id_usuario: usuarioId,
          metodo_envio: metodoEnvio,
          data_envio: new Date(), // Definindo a data de envio
          palestras: {
            connect: palestrasSelecionadas.map((palestra) => ({ id: palestra.id })), // Conecta as palestras ao cronograma
          },
        },
      });

      // 5. Retornar o cronograma gerado
      return cronograma;
    } catch (error) {
      console.error('Erro ao processar respostas:', error);
      throw new Error('Não foi possível processar as respostas.');
    }
  }
}


