import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePerguntaDto } from './dto/create-pergunta.dto';
import { UpdatePerguntaDto } from './dto/update-pergunta.dto';
import { Pergunta } from './entities/pergunta.entity';

@Injectable()
export class PerguntaService {
  constructor(private prisma: PrismaService) {}

  async create(createPerguntaDto: CreatePerguntaDto) {
    try {
      const pergunta = await this.prisma.pergunta.create({ data: createPerguntaDto });
      return pergunta;
    } catch (error) {
      throw new HttpException('Erro ao criar pergunta. Verifique os dados enviados.', 400);
    }
  }

  async findAll() {
    const perguntas = await this.prisma.pergunta.findMany( {
      include:{
        respostas: true,
      }
    });
    return {
      message: perguntas.length
        ? `Encontradas ${perguntas.length} pergunta(s).`
        : 'Nenhuma pergunta encontrada.',
      data: perguntas,
    };
  }

  async findOne(id: number) {
    const pergunta = await this.prisma.pergunta.findUnique({ where: { id },include: {respostas:true} });
    if (pergunta) {
      return pergunta;
    } else {
      throw new HttpException(`Pergunta com ID ${id} não encontrada.`, 404);
    }
  }

  async update(id: number, updatePerguntaDto: UpdatePerguntaDto) {
    await this.findOne(id); 
    try {
      const perguntaAtualizada = await this.prisma.pergunta.update({
        where: { id },
        data: updatePerguntaDto,
      });
      return perguntaAtualizada;
    } catch (error) {
      throw new HttpException('Erro ao atualizar a pergunta. Verifique os dados enviados.', 400);
    }
  }

  async remove(id: number) {
    const pergunta = await this.findOne(id); 
    try {
      await this.prisma.pergunta.delete({ where: { id } });
      return `Pergunta "${pergunta.pergunta}" removida com sucesso.`;
    } catch (error) {
      throw new HttpException('Erro ao remover a pergunta.', 400);
    }
  }
}
