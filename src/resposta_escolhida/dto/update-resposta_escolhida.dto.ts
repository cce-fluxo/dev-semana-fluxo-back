import { PartialType } from '@nestjs/mapped-types';
import { CreateRespostaEscolhidaDto } from './create-resposta_escolhida.dto';

export class UpdateRespostaEscolhidaDto extends PartialType(CreateRespostaEscolhidaDto) {}
