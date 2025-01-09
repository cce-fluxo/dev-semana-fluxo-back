import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho conforme sua estrutura
import { AlgoritmoService } from 'src/algoritmo/algoritmo.service';


@Injectable()
export class ControladorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly algoritmoService: AlgoritmoService,
  ) {}

  async processarRespostas(usuarioId: number, metodoEnvio: string,  respostas: { perguntaId: number; respostaId: number }[]) {
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

      await this.prisma.resposta_escolhida.createMany({ //Tem de ser colocado no service de resposta_escolhida para maior robustez
        data: entradasRespostaEscolhida,
      });

      // 3. Chamar o algoritmo de recomendação
      const palestrasRecomendas = await this.algoritmoService.recomendarPalestras(usuarioId);

      //4. montar o cronograma
      const cronograma = "cronogramaBonito";
      
      // 5. Retornar o cronograma gerado
      return cronograma;
    } catch (error) {
      console.error('Erro ao processar respostas:', error);
      throw new Error('Não foi possível processar as respostas.');
    }
  }
}

