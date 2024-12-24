import { Injectable } from '@nestjs/common';
import { CreateTagEmpresaDto } from './dto/create-tag_empresa.dto';
import { UpdateTagEmpresaDto } from './dto/update-tag_empresa.dto';

@Injectable()
export class TagEmpresaService {
  create(createTagEmpresaDto: CreateTagEmpresaDto) {
    return 'This action adds a new tagEmpresa';
  }

  findAll() {
    return `This action returns all tagEmpresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagEmpresa`;
  }

  update(id: number, updateTagEmpresaDto: UpdateTagEmpresaDto) {
    return `This action updates a #${id} tagEmpresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagEmpresa`;
  }
}
