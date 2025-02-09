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
        user: 'robert17ceschini@gmail.com', // Seu email
        pass: 'lydj xxib vhoc okjy', // Senha do app gerada no Gmail
      },
    });
  }

  async enviarEmailComPdf(email: string, caminhoPdf: string): Promise<void> {
    try {
      // Configura o email
      const emailOptions = {
        from: 'robert17ceschini@gmail.com', // Remetente
        to: email, // Destinatário
        subject: 'Não abra conteúdo suspeito!',
        text: 'Este PDF pode conter arquivos maliciosos.',
        attachments: [
          {
            filename: 'cronograma.pdf',
            path: caminhoPdf, // Caminho do arquivo
          },
        ],
      };

      // Envia o email
      await this.transporter.sendMail(emailOptions);
      console.log(`Email enviado para ${email}.`);
    } catch (error) {
      console.error(`Erro ao enviar o email: ${error.message}`);
      throw error; // Repropaga o erro para quem chamou a função
    }
  }
}
