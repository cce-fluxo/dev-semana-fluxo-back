import { PartialType } from '@nestjs/mapped-types';
import { CreateCronogramaPalestraDto } from './create-cronograma_palestra.dto';

export class UpdateCronogramaPalestraDto extends PartialType(CreateCronogramaPalestraDto) {}
