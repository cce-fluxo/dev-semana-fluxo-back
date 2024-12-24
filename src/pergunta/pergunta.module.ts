import { Module } from '@nestjs/common';
import { PerguntaService } from './pergunta.service';
import { PerguntaController } from './pergunta.controller';

@Module({
  controllers: [PerguntaController],
  providers: [PerguntaService],
})
export class PerguntaModule {}
