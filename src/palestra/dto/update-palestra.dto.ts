import { PartialType } from '@nestjs/mapped-types';
import { CreatePalestraDto } from './create-palestra.dto';

export class UpdatePalestraDto extends PartialType(CreatePalestraDto) {}
