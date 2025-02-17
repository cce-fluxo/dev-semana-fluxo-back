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

  async enviarEmailComPdf(email: string, caminhoPdf: string, nomeUsuario: string): Promise<void> {
    try {
      // Configura o email
      const emailOptions = {
        from: 'devprojetosfe@gmail.com', // Remetente
        to: email, // Destinatário
        subject: 'Cronograma personalizado SEF',
        text: `Olá ${nomeUsuario}!\nEste é o cronograma que selecionamos para você com base nas suas respostas. Esperamos que goste e aproveite muito!`,
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
