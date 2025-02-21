import { Injectable } from '@nestjs/common';
const nodemailer = require('nodemailer');

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    // Configura o transporter com seu email pessoal
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'devprojetosfe@gmail.com', // Seu email
        pass: 'nbez tdxh ohnh sogm', // Senha do app gerada no Gmail
      },
    });
  }

  async enviarEmailComPdfs(email: string, caminhosPdfs: string[], nomeUsuario: string): Promise<void> {
    try {
      // Cria um array de anexos baseado nos caminhos dos PDFs
      const attachments = caminhosPdfs.map((caminho, index) => ({

        filename: index === 0 ? `cronograma-${nomeUsuario}.pdf` : 'palestras.pdf',
        path: caminho,
      }));
  
      const emailOptions = {
        from: 'devprojetosfe@gmail.com',
        to: email,
        subject: 'Cronograma personalizado SEF',
        text: `Olá ${nomeUsuario}!\nSegue o cronograma e as palestras da SEF.`,
        attachments,
      };
  
      await this.transporter.sendMail(emailOptions);
      console.log(`Email enviado para ${email}.`);
    } catch (error) {
      console.error(`Erro ao enviar o email: ${error.message}`);
      throw error;
    }
  }
  
}
