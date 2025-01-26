import nodemailer from 'nodemailer';
import fs from 'fs';

export class EmailService {
    
  private transporter;

  constructor() {
    // Configura o transporter com seu email pessoal
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'robert17ceschini@gmail.com', // Seu email
        pass: 'sua-senha-do-app', // Senha do app gerada no Gmail
      },
    });
  }

  async enviarEmailComPdf(email: string, caminhoPdf: string): Promise<void> {
    try {
      // Configura o email
      const emailOptions = {
        from: 'robert17ceschini@gmail.com', // Remetente
        to: email, // Destinatário
        subject: 'Seu cronograma de palestras',
        text: 'Segue em anexo o seu cronograma de palestras.',
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

      // Remove o arquivo após o envio
      fs.unlink(caminhoPdf, (err) => {
        if (err) {
          console.error(`Erro ao apagar o arquivo: ${err.message}`);
        } else {
          console.log('Arquivo PDF removido com sucesso.');
        }
      });
    } catch (error) {
      console.error(`Erro ao enviar o email: ${error.message}`);
    }
  }
}
