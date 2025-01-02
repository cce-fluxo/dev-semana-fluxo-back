import { Module } from '@nestjs/common';
import { TagRespostaService } from './tag_resposta.service';
import { TagRespostaController } from './tag_resposta.controller';
import { RespostaModule } from 'src/resposta/resposta.module';
import { TagModule } from 'src/tag/tag.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [TagModule, RespostaModule],
  controllers: [TagRespostaController],
  providers: [TagRespostaService, PrismaService],
})
export class TagRespostaModule {}
