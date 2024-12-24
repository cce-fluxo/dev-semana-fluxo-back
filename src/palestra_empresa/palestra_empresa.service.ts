import { Injectable } from '@nestjs/common';
import { CreatePalestraEmpresaDto } from './dto/create-palestra_empresa.dto';
import { UpdatePalestraEmpresaDto } from './dto/update-palestra_empresa.dto';

@Injectable()
export class PalestraEmpresaService {
  create(createPalestraEmpresaDto: CreatePalestraEmpresaDto) {
    return 'This action adds a new palestraEmpresa';
  }

  findAll() {
    return `This action returns all palestraEmpresa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} palestraEmpresa`;
  }

  update(id: number, updatePalestraEmpresaDto: UpdatePalestraEmpresaDto) {
    return `This action updates a #${id} palestraEmpresa`;
  }

  remove(id: number) {
    return `This action removes a #${id} palestraEmpresa`;
  }
}
