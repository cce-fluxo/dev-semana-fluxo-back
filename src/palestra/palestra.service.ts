import { Injectable } from '@nestjs/common';
import { CreatePalestraDto } from './dto/create-palestra.dto';
import { UpdatePalestraDto } from './dto/update-palestra.dto';

@Injectable()
export class PalestraService {
  create(createPalestraDto: CreatePalestraDto) {
    return 'This action adds a new palestra';
  }

  findAll() {
    return `This action returns all palestra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palestra`;
  }

  update(id: number, updatePalestraDto: UpdatePalestraDto) {
    return `This action updates a #${id} palestra`;
  }

  remove(id: number) {
    return `This action removes a #${id} palestra`;
  }
}
