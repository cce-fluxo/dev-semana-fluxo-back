import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDataUsuarioDto } from './dto/create-data_usuario.dto';
import { UpdateDataUsuarioDto } from './dto/update-data_usuario.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class DataUsuarioService {
  constructor(
    private prisma: PrismaService,
    private usuario: UsuarioService) {}

  async create(createDataUsuarioDto: CreateDataUsuarioDto) {
    await this.usuario.findOne(createDataUsuarioDto.id_usuario); //verifica se o usuario existe
    try {
      const dataUsuario = await this.prisma.data_usuario.create({
        data: createDataUsuarioDto,
      });
      return dataUsuario;
    } catch (error) {
      throw new HttpException('Erro ao criar DataUsuario', 500);
    }
  }

  async findAll() {
    const dataUsuarios = await this.prisma.data_usuario.findMany();
    return {
      message: dataUsuarios.length
        ? `Encontrados ${dataUsuarios.length} registros de DataUsuario.`
        : 'Nenhum registro de DataUsuario encontrado.',
      data: dataUsuarios,
    };
  }

  async findOne(id: number) {
    const dataUsuario = await this.prisma.data_usuario.findUnique({
      where: { id },
    });
    if (dataUsuario) {
      return dataUsuario;
    } else {
      throw new HttpException(`DataUsuario com ID ${id} não encontrado.`, 404);
    }
  }

  async update(id: number, updateDataUsuarioDto: UpdateDataUsuarioDto) {
    const dataUsuario = await this.findOne(id);
    const dataUsuarioAtualizado = await this.prisma.data_usuario.update({
      where: { id },
      data: updateDataUsuarioDto,
    });
    return dataUsuarioAtualizado;
  }

  async remove(id: number) {
    const dataUsuario = await this.findOne(id);
    await this.prisma.data_usuario.delete({
      where: { id },
    });
    return `DataUsuario com ID ${dataUsuario.id} removido com sucesso.`;
  }
}
