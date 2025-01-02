import { Injectable, HttpException } from '@nestjs/common';
import { CreateTagPalestraDto } from './dto/create-tag_palestra.dto';
import { UpdateTagPalestraDto } from './dto/update-tag_palestra.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PalestraService } from 'src/palestra/palestra.service';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class TagPalestraService {
  constructor(
    private prisma: PrismaService,
    private palestraService: PalestraService,
    private tagService: TagService,
  ) {}

  async create(createTagPalestraDto: CreateTagPalestraDto) {
    await this.palestraService.findOne(createTagPalestraDto.id_palestra);
    await this.tagService.findOne(createTagPalestraDto.id_tag);

    const tagPalestra = await this.prisma.tag_palestra.create({
      data: createTagPalestraDto,
    });

    return tagPalestra;
  }

  async findAll() {
    const tagsPalestras = await this.prisma.tag_palestra.findMany({
      include: { tag: true, palestra: true },
    });

    return {
      message: tagsPalestras.length
        ? `Encontrados ${tagsPalestras.length} registros de tags para palestras.`
        : 'Nenhum registro encontrado.',
      data: tagsPalestras,
    };
  }

  async findOne(id: number) {
    const tagPalestra = await this.prisma.tag_palestra.findUnique({
      where: { id },
      include: { tag: true, palestra: true },
    });

    if (!tagPalestra) {
      throw new HttpException(`Registro com ID ${id} não encontrado.`,404);
    }

    return tagPalestra;
  }

  async update(id: number, updateTagPalestraDto: UpdateTagPalestraDto) {
    const tagPalestra = await this.findOne(id);

    if (updateTagPalestraDto.id_palestra) {
      await this.palestraService.findOne(updateTagPalestraDto.id_palestra);
    }

    if (updateTagPalestraDto.id_tag) {
      await this.tagService.findOne(updateTagPalestraDto.id_tag);
    }

    const tagPalestraAtualizada = await this.prisma.tag_palestra.update({
      where: { id },
      data: updateTagPalestraDto,
    });

    return tagPalestraAtualizada;
  }

  async remove(id: number) {
    const tagPalestra = await this.findOne(id);

    await this.prisma.tag_palestra.delete({
      where: { id },
    });

    return `Registro entre tag ${tagPalestra.tag.nome} e palestra ${tagPalestra.palestra.nome} com ID ${tagPalestra.id} removido com sucesso.`;
  }
}
