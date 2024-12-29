import { Injectable } from '@nestjs/common';
import { CreateDataUsuarioDto } from './dto/create-data_usuario.dto';
import { UpdateDataUsuarioDto } from './dto/update-data_usuario.dto';

@Injectable()
export class DataUsuarioService {
  create(createDataUsuarioDto: CreateDataUsuarioDto) {
    return 'This action adds a new dataUsuario';
  }

  findAll() {
    return `This action returns all dataUsuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dataUsuario`;
  }

  update(id: number, updateDataUsuarioDto: UpdateDataUsuarioDto) {
    return `This action updates a #${id} dataUsuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} dataUsuario`;
  }
}
