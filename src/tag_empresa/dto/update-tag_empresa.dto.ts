import { PartialType } from '@nestjs/mapped-types';
import { CreateTagEmpresaDto } from './create-tag_empresa.dto';

export class UpdateTagEmpresaDto extends PartialType(CreateTagEmpresaDto) {}
