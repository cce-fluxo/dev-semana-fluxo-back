import { PartialType } from '@nestjs/mapped-types';
import { CreateTagRespostaDto } from './create-tag_resposta.dto';

export class UpdateTagRespostaDto extends PartialType(CreateTagRespostaDto) {}
