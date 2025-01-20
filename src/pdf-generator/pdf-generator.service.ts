import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PdfService {
  async gerarPDF(url: string, caminhoArquivo: string): Promise<string> {
    // Verifica se o diretório existe, se não, cria
    const diretorio = path.dirname(caminhoArquivo); // Pega o diretório do caminho do arquivo
    if (!fs.existsSync(diretorio)) {
      fs.mkdirSync(diretorio, { recursive: true }); // Cria o diretório se não existir
    }

    const browser = await puppeteer.launch({
      headless: true, // Mantém em modo sem interface gráfica
      args: ['--no-sandbox', '--disable-setuid-sandbox'], // Recomendado para servidores
    });

    try {
      const page = await browser.newPage();

      // Navega até a URL fornecida
      await page.goto(url, {
        waitUntil: 'networkidle0', // Espera carregar recursos
      });

      // Salva o PDF no caminho especificado
      await page.pdf({
        path: caminhoArquivo, // Caminho do arquivo gerado
        format: 'A4', // Configurações básicas
        printBackground: true, // Inclui os estilos de fundo
      });

      return caminhoArquivo; // Retorna o caminho para referência
    } catch (error) {
      console.error('Erro ao gerar o PDF:', error);
      throw new Error('Falha ao gerar PDF.');
    } finally {
      await browser.close();
    }
  }
}
