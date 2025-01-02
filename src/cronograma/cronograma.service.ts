import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class CronogramaService {
  constructor(
    private prisma: PrismaService,
    private usuario: UsuarioService,
  ) {}

  async create(createCronogramaDto: CreateCronogramaDto) {
    //Esse deveria ser o endPoint após clicar no botao de submit?
    await this.usuario.findOne(createCronogramaDto.id_usuario); //Verifica se o usuario existe
    try {
      const cronograma = await this.prisma.cronograma.create({
        data: createCronogramaDto,
      });
      return cronograma;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new HttpException(`Já existe um cronograma para o usuário informado.`, 400);
      }
      throw new HttpException('Erro ao criar cronograma.', 400);
    }
  }

  async findAll() {
    const cronogramas = await this.prisma.cronograma.findMany({
      include: { palestras: true, usuario: true },
    });
    return {
      message: cronogramas.length
        ? `Encontrados ${cronogramas.length} cronograma(s).`
        : 'Nenhum cronograma encontrado.',
      data: cronogramas,
    };
  }

  async findOne(id: number) {
    const cronograma = await this.prisma.cronograma.findUnique({
      where: { id },
      include: { palestras: true, usuario: true },
    });
    if (cronograma) {
      return cronograma;
    } else {
      throw new HttpException(`Cronograma com ID ${id} não encontrado.`, 404);
    }
  }

  async update(id: number, updateCronogramaDto: UpdateCronogramaDto) {
    await this.findOne(id); // Verifica se o cronograma existe
    try {
      const cronogramaAtualizado = await this.prisma.cronograma.update({
        where: { id },
        data: updateCronogramaDto,
      });
      return cronogramaAtualizado;
    } catch (error) {
      throw new HttpException('Erro ao atualizar cronograma.', 400);
    }
  }

  async remove(id: number) {
    const cronograma = await this.findOne(id); // Verifica se o cronograma existe
    try {
      await this.prisma.cronograma.delete({ where: { id } });
      const mensagemSucesso = `Cronograma do usuário ${cronograma.usuario.nome} removido com sucesso.`
      return mensagemSucesso;
    } catch (error) {
      throw new HttpException('Erro ao remover cronograma.', 400);
    }
  }
}
