import { Injectable } from '@nestjs/common';
import { CreateTagPalestraDto } from './dto/create-tag_palestra.dto';
import { UpdateTagPalestraDto } from './dto/update-tag_palestra.dto';

@Injectable()
export class TagPalestraService {
  create(createTagPalestraDto: CreateTagPalestraDto) {
    return 'This action adds a new tagPalestra';
  }

  findAll() {
    return `This action returns all tagPalestra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagPalestra`;
  }

  update(id: number, updateTagPalestraDto: UpdateTagPalestraDto) {
    return `This action updates a #${id} tagPalestra`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagPalestra`;
  }
}
