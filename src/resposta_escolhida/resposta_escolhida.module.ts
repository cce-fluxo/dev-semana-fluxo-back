import { Module } from '@nestjs/common';
import { RespostaEscolhidaService } from './resposta_escolhida.service';
import { RespostaEscolhidaController } from './resposta_escolhida.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { RespostaModule } from 'src/resposta/resposta.module';
import { PerguntaModule } from 'src/pergunta/pergunta.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports:[RespostaModule, PerguntaModule, UsuarioModule],
  controllers: [RespostaEscolhidaController],
  providers: [RespostaEscolhidaService, PrismaService],
})
export class RespostaEscolhidaModule {}
