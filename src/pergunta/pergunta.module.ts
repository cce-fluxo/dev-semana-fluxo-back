import { Module } from '@nestjs/common';
import { PerguntaService } from './pergunta.service';
import { PerguntaController } from './pergunta.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PerguntaController],
  providers: [PerguntaService, PrismaService],
})
export class PerguntaModule {}
