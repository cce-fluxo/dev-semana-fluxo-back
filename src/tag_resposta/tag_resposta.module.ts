import { Module } from '@nestjs/common';
import { TagRespostaService } from './tag_resposta.service';
import { TagRespostaController } from './tag_resposta.controller';

@Module({
  controllers: [TagRespostaController],
  providers: [TagRespostaService],
})
export class TagRespostaModule {}
