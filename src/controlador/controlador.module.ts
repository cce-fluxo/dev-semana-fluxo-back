import { Module } from '@nestjs/common';
import { ControladorService } from './controlador.service';
import { ControladorController } from './controlador.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlgoritmoService } from 'src/algoritmo/algoritmo.service';
import { PdfService } from 'src/pdf-generator/pdf-generator.service';
import { EmailService } from 'src/email/email.service';
import { UsuarioService } from 'src/usuario/usuario.service';
import { CronogramaService } from 'src/cronograma/cronograma.service';

@Module({
  providers: [ControladorService, AlgoritmoService, PrismaService, PdfService, EmailService, UsuarioService, CronogramaService],
  controllers: [ControladorController],
  exports: [ControladorService],
})
export class ControladorModule {}
