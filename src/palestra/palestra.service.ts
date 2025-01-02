import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePalestraDto } from './dto/create-palestra.dto';
import { UpdatePalestraDto } from './dto/update-palestra.dto';

@Injectable()
export class PalestraService {
  constructor(private prisma: PrismaService) {}

  async create(createPalestraDto: CreatePalestraDto) {
    try {
      const palestra = await this.prisma.palestra.create({ data: createPalestraDto });
      return palestra;
    } catch (error) {
      throw new HttpException('Erro ao criar palestra. Verifique os dados enviados.', 400);
    }
  }

  async findAll() {
    const palestras = await this.prisma.palestra.findMany({
      include: {
        tags: true,
        cronogramas: true,
        empresas: true,
      },
    });

    return {
      message: palestras.length
        ? `Encontradas ${palestras.length} palestras.`
        : 'Nenhuma palestra encontrada.',
      data: palestras,
    };
  }

  async findOne(id: number) {
    const palestra = await this.prisma.palestra.findUnique({
      where: { id },
      include: {
        tags: true,
        empresas: true,
      },
    });

    if (!palestra) {
      throw new HttpException(`Palestra com ID ${id} não encontrada.`, 404);
    }

    return palestra;
  }

  async update(id: number, updatePalestraDto: UpdatePalestraDto) {
    await this.findOne(id); // Verifica se a palestra existe antes de atualizar

    const palestraAtualizada = await this.prisma.palestra.update({
      where: { id },
      data: updatePalestraDto,
    });

    return palestraAtualizada;
  }

  async remove(id: number) {
    const palestra = await this.findOne(id); // Verifica se a palestra existe antes de remover

    await this.prisma.palestra.delete({
      where: { id },
    });
    return `Palestra [${palestra.nome}] com ID ${id} removida com sucesso.`;
  }
}
