import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CronogramaModule } from './cronograma/cronograma.module';
import { PalestraModule } from './palestra/palestra.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TagModule } from './tag/tag.module';
import { TagEmpresaModule } from './tag_empresa/tag_empresa.module';
import { TagPalestraModule } from './tag_palestra/tag_palestra.module';
import { TagRespostaModule } from './tag_resposta/tag_resposta.module';
import { RespostaModule } from './resposta/resposta.module';
import { RespostaEscolhidaModule } from './resposta_escolhida/resposta_escolhida.module';
import { PerguntaModule } from './pergunta/pergunta.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PrismaService } from './prisma/prisma.service';
import { ControladorModule } from './controlador/controlador.module';
import { AlgoritmoService } from './algoritmo/algoritmo.service';
import { PdfService } from './pdf-generator/pdf-generator.service';
import { EmailService } from './email/email.service';

@Module({
  imports: [UsuarioModule, PerguntaModule, RespostaEscolhidaModule, RespostaModule, TagRespostaModule, TagPalestraModule, TagEmpresaModule, TagModule, EmpresaModule, PalestraModule, CronogramaModule, ControladorModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, AlgoritmoService, PdfService, EmailService],
})
export class AppModule {}
