import { PartialType } from '@nestjs/mapped-types';
import { CreatePalestraEmpresaDto } from './create-palestra_empresa.dto';

export class UpdatePalestraEmpresaDto extends PartialType(CreatePalestraEmpresaDto) {}
