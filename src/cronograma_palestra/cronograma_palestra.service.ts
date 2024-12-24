import { Injectable } from '@nestjs/common';
import { CreateCronogramaPalestraDto } from './dto/create-cronograma_palestra.dto';
import { UpdateCronogramaPalestraDto } from './dto/update-cronograma_palestra.dto';

@Injectable()
export class CronogramaPalestraService {
  create(createCronogramaPalestraDto: CreateCronogramaPalestraDto) {
    return 'This action adds a new cronogramaPalestra';
  }

  findAll() {
    return `This action returns all cronogramaPalestra`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cronogramaPalestra`;
  }

  update(id: number, updateCronogramaPalestraDto: UpdateCronogramaPalestraDto) {
    return `This action updates a #${id} cronogramaPalestra`;
  }

  remove(id: number) {
    return `This action removes a #${id} cronogramaPalestra`;
  }
}
