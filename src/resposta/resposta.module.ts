import { Module } from '@nestjs/common';
import { RespostaService } from './resposta.service';
import { RespostaController } from './resposta.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RespostaController],
  providers: [RespostaService, PrismaService],
})
export class RespostaModule {}
