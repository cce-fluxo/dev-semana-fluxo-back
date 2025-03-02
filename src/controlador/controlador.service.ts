import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Ajuste o caminho conforme sua estrutura
import { AlgoritmoService } from 'src/algoritmo/algoritmo.service';
import { PdfService } from 'src/pdf-generator/pdf-generator.service';
import { EmailService } from 'src/email/email.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CronogramaService } from 'src/cronograma/cronograma.service';


@Injectable()
export class ControladorService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly algoritmoService: AlgoritmoService,
    private readonly pdfService: PdfService,
    private readonly emailService: EmailService,
    private readonly usuarioService: UsuarioService,
    private readonly cronogramaService: CronogramaService
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
      const palestrasSelecionadas = palestrasRecomendas.slice(0, 4);

      const cronogramaExistente = await this.prisma.cronograma.findUnique({
        where: { id_usuario: usuarioId},
      });
    
      if (cronogramaExistente) {
        // Deleta o cronograma existente
        await this.prisma.cronograma.delete({
          where: { id: cronogramaExistente.id },
        });
      }
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

      return cronograma;

    } catch (error) {
      console.error('Erro ao processar respostas:', error);
      throw new Error('Não foi possível processar as respostas.');
    }
  }

  async enviarEmail(usuarioId: number, rotasPrint: string[]) {
    const usuario = await this.usuarioService.findOne(usuarioId);
    const emailUsuario = usuario.email;
    const nomeUsuario = usuario.nome;
  
    const path = require('path');
    const fs = require('fs');
    const pdfDir = path.join(__dirname, 'documents', 'pdfs');
  
    if (!fs.existsSync(pdfDir)) {
      fs.mkdirSync(pdfDir, { recursive: true });
    }
  
    // Defina caminhos para os dois PDFs
    const filePath1 = path.join(pdfDir, `cronograma-${nomeUsuario}.pdf`);
    const filePath2 = path.join(pdfDir, 'palestras.pdf');
  
    // Gera os dois PDFs
    const caminhoPdf1 = await this.pdfService.gerarPDF(rotasPrint[0], filePath1);
    const caminhoPdf2 = await this.pdfService.gerarPDF(rotasPrint[1], filePath2);
    console.log("PDF1 gerado - ", caminhoPdf1);
    console.log("PDF2 gerado - ", caminhoPdf2);

  
    // Envia o email com ambos os PDFs anexados
    console.log(`${emailUsuario}\n [${caminhoPdf1}, ${caminhoPdf2}]\n ${nomeUsuario} `)
    const enviarEmail = await this.emailService.enviarEmailComPdfs(emailUsuario, [caminhoPdf1, caminhoPdf2], nomeUsuario);
  
    await this.usuarioService.marcarEmailComoEnviado(usuario.id);
  }
  

}


