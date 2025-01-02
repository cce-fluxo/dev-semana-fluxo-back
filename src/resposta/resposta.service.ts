import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRespostaDto } from './dto/create-resposta.dto';
import { UpdateRespostaDto } from './dto/update-resposta.dto';

@Injectable()
export class RespostaService {
  constructor(private prisma: PrismaService) {}

  async create(createRespostaDto: CreateRespostaDto) {
    try {
      const resposta = await this.prisma.resposta.create({ data: createRespostaDto });
      return resposta;
    } catch (error) {
      throw new HttpException('Erro ao criar resposta. Verifique os dados enviados.', 400);
    }
  }

  async findAll() {
    const respostas = await this.prisma.resposta.findMany();
    return {
      message: respostas.length
        ? `Encontradas ${respostas.length} resposta(s).`
        : 'Nenhuma resposta encontrada.',
      data: respostas,
    };
  }

  async findOne(id: number) {
    const resposta = await this.prisma.resposta.findUnique({ where: { id } });
    if (resposta) {
      return resposta;
    } else {
      throw new HttpException(`Resposta com ID ${id} não encontrada.`, 404);
    }
  }

  async update(id: number, updateRespostaDto: UpdateRespostaDto) {
    await this.findOne(id); // Valida se a resposta existe
    try {
      const respostaAtualizada = await this.prisma.resposta.update({
        where: { id },
        data: updateRespostaDto,
      });
      return respostaAtualizada;
    } catch (error) {
      throw new HttpException('Erro ao atualizar a resposta. Verifique os dados enviados.', 400);
    }
  }

  async remove(id: number) {
    const resposta = await this.findOne(id); // Valida se a resposta existe
    try {
      await this.prisma.resposta.delete({ where: { id } });
      return `Resposta com ID ${id} removida com sucesso.`;
    } catch (error) {
      throw new HttpException('Erro ao remover a resposta.', 400);
    }
  }
}
