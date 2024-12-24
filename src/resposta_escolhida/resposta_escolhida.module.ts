import { Module } from '@nestjs/common';
import { RespostaEscolhidaService } from './resposta_escolhida.service';
import { RespostaEscolhidaController } from './resposta_escolhida.controller';

@Module({
  controllers: [RespostaEscolhidaController],
  providers: [RespostaEscolhidaService],
})
export class RespostaEscolhidaModule {}
