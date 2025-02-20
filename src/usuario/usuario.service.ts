import { HttpException,  Injectable, Inject, forwardRef } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CronogramaService } from 'src/cronograma/cronograma.service';

@Injectable()
export class UsuarioService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => CronogramaService))
    private cronogramaService: CronogramaService,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const usuario = await this.prisma.usuario.create({ data: createUsuarioDto });
      return { message: 'Usuário cadastrado com sucesso.', ...usuario };
    } catch (error) {
      if (error.code === 'P2002') {
        // Permitir o cadastro e apenas avisar que o email já existia
        const usuarioExistente = await this.prisma.usuario.findUnique({
          where: { email: createUsuarioDto.email },
        });

        const usuarioAtualizado = await this.update(usuarioExistente.id, createUsuarioDto);
        return { message: 'Usuário já existia, dados atualizados.', ...usuarioAtualizado };

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

  async findPalestrasRecomendadas(id: number) {
    try {
      const usuario = await this.findOne(id);
      const cronograma = await this.cronogramaService.findUserCronograma(id);
      
      return { 
        message: "Palestras recomendadas encontradas com sucesso.", 
        data: cronograma.palestras 
      };
    } catch (error) {
      throw error;
    }
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
