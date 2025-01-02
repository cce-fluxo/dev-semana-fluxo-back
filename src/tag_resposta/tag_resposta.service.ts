import { Injectable, HttpException } from '@nestjs/common';
import { CreateTagRespostaDto } from './dto/create-tag_resposta.dto';
import { UpdateTagRespostaDto } from './dto/update-tag_resposta.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { RespostaService } from 'src/resposta/resposta.service';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class TagRespostaService {
  constructor(
    private prisma: PrismaService,
    private respostaService: RespostaService,
    private tagService: TagService,
  ) {}

  async create(createTagRespostaDto: CreateTagRespostaDto) {
    await this.respostaService.findOne(createTagRespostaDto.id_resposta);
    await this.tagService.findOne(createTagRespostaDto.id_tag);

    const tagResposta = await this.prisma.tag_resposta.create({
      data: createTagRespostaDto,
    });

    return tagResposta;
  }

  async findAll() {
    const tagsRespostas = await this.prisma.tag_resposta.findMany({
      include: { tag: true, resposta: true },
    });

    return {
      message: tagsRespostas.length
        ? `Encontrados ${tagsRespostas.length} registros de tags para respostas.`
        : 'Nenhum registro encontrado.',
      data: tagsRespostas,
    };
  }

  async findOne(id: number) {
    const tagResposta = await this.prisma.tag_resposta.findUnique({
      where: { id },
      include: { tag: true, resposta: true },
    });

    if (!tagResposta) {
      throw new HttpException(
        `Registro com ID ${id} não encontrado.`,
        404,
      );
    }

    return tagResposta;
  }

  async update(id: number, updateTagRespostaDto: UpdateTagRespostaDto) {
    const tagResposta = await this.findOne(id);

    if (updateTagRespostaDto.id_resposta) {
      await this.respostaService.findOne(updateTagRespostaDto.id_resposta);
    }

    if (updateTagRespostaDto.id_tag) {
      await this.tagService.findOne(updateTagRespostaDto.id_tag);
    }

    const tagRespostaAtualizada = await this.prisma.tag_resposta.update({
      where: { id },
      data: updateTagRespostaDto,
    });

    return tagRespostaAtualizada;
  }

  async remove(id: number) {
    const tagResposta = await this.findOne(id);

    await this.prisma.tag_resposta.delete({
      where: { id },
    });

    return `Registro entre tag ${tagResposta.tag.nome} e respostaId ${tagResposta.resposta.id}  com ID ${tagResposta.id} removido com sucesso.`;
  }
}
