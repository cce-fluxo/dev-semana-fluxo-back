import { PartialType } from '@nestjs/swagger';
import { CreateDataUsuarioDto } from './create-data_usuario.dto';

export class UpdateDataUsuarioDto extends PartialType(CreateDataUsuarioDto) {}
