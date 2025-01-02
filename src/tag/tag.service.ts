import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async create(createTagDto: CreateTagDto) {
    try {
      const tag = await this.prisma.tag.create({ data: createTagDto });
      return tag;
    } catch (error) {
      throw new HttpException('Erro ao criar Tag.', 500);
    }
  }

  async findAll() {
    const tags = await this.prisma.tag.findMany();
    return {
      message: tags.length
        ? `Encontradas ${tags.length} tags.`
        : 'Nenhuma tag encontrada.',
      data: tags,
    };
  }

  async findOne(id: number) {
    const tag = await this.prisma.tag.findUnique({ where: { id } });
    if (tag) {
      return tag;
    } else {
      throw new HttpException(`Tag com ID ${id} não encontrada.`, 404);
    }
  }

  async update(id: number, updateTagDto: UpdateTagDto) {
    await this.findOne(id);
    const tagAtualizada = await this.prisma.tag.update({
      where: { id },
      data: updateTagDto,
    });
    return tagAtualizada;
  }

  async remove(id: number) {
    const tag = await this.findOne(id);
    await this.prisma.tag.delete({ where: { id } });
    return `Tag ${tag.nome} removida com sucesso.`;
  }
}
