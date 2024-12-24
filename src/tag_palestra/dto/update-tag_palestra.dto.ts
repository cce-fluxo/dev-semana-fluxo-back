import { PartialType } from '@nestjs/mapped-types';
import { CreateTagPalestraDto } from './create-tag_palestra.dto';

export class UpdateTagPalestraDto extends PartialType(CreateTagPalestraDto) {}
