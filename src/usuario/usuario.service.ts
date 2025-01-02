import { HttpException, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsuarioService {

  constructor(private prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = await this.prisma.usuario.create({ data: createUsuarioDto });
      return usuario;
    } catch (error) {
      if (error.code === 'P2002') //Codigo de erro Unique constraint failed
      {
        throw new HttpException (`${error.meta.target} já cadastrado`, 400);
      }
    }
  }

  async findAll() {
    const usuarios = await this.prisma.usuario.findMany();
    return {
      message: usuarios.length
        ? `Encontrados ${usuarios.length} usuário(s).`
        : 'Nenhum usuário encontrado.',
      data: usuarios,
    };
  }
  

  async findOne(id: number) {
    const usuario = await this.prisma.usuario.findUnique({ where: {id}});
    if (usuario){
      return usuario;
    }
    else{
      throw new HttpException(`Usuario com ID ${id} não encontrado.`, 404);
    }
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = await this.findOne(id);
    const usuarioAtualizado = await this.prisma.usuario.update ({
      where:{id}, 
      data: updateUsuarioDto});
    return usuarioAtualizado;
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    const mensagemSucesso = `Usuario ${usuario.nome} removido com sucesso.`
    await this.prisma.usuario.delete({where: {id}});
    return mensagemSucesso;
  }
}
