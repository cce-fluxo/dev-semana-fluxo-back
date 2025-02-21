import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  async gerarPDF(url: string, caminhoArquivo: string): Promise<string> {
    console.log(`*Gerar PDF*\nurl:${url}\ncaminho_arquivo:${caminhoArquivo}\n`)
    // Verifica se o diretório existe, se não, cria
    const diretorio = path.dirname(caminhoArquivo);
    if (!fs.existsSync(diretorio)) {
      fs.mkdirSync(diretorio, { recursive: true });
    }

    const browser = await puppeteer.launch({
      headless: true, // Modo sem interface gráfica
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Para servidores
    });

    try {
      const page = await browser.newPage();

      // Configura o timeout máximo e valida a URL
      if (!this.isValidUrl(url)) {
        throw new Error(`URL inválida: ${url}`);
      }

      await page.goto(url, {
        waitUntil: 'networkidle0', // Espera pelo carregamento inicial
        timeout: 30000, // Aumenta o timeout para 30 segundos
      });

      // Salva o PDF no caminho especificado
      await page.pdf({
        path: caminhoArquivo, // Caminho do arquivo gerado
        format: 'A4',
        printBackground: true,
      });

      return caminhoArquivo; // Retorna o caminho gerado
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error.message);
      throw new Error('Falha ao gerar PDF.');
    } finally {
      await browser.close();
    }
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }
}
