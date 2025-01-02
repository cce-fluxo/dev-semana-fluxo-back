import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTagEmpresaDto } from './dto/create-tag_empresa.dto';
import { UpdateTagEmpresaDto } from './dto/update-tag_empresa.dto';
import { EmpresaService } from 'src/empresa/empresa.service';
import { TagService } from 'src/tag/tag.service';

@Injectable()
export class TagEmpresaService {
  constructor(
    private prisma: PrismaService,
    private empresa: EmpresaService,
    private tag: TagService) {}

  async create(createTagEmpresaDto: CreateTagEmpresaDto) {
    await this.empresa.findOne(createTagEmpresaDto.id_empresa);
    await this.tag.findOne(createTagEmpresaDto.id_tag);
    try {
      const tagEmpresa = await this.prisma.tag_empresa.create({
        data: createTagEmpresaDto,
      });
      return tagEmpresa;
    } catch (error) {
      throw new HttpException('Erro ao criar TagEmpresa, verifique os dados enviados.', 500);
    }
  }

  async findAll() {
    const tagsEmpresa = await this.prisma.tag_empresa.findMany({
      include: { tag: true, empresa: true },
    });
    return {
      message: tagsEmpresa.length
        ? `Encontradas ${tagsEmpresa.length} associações de Tag e Empresa.`
        : 'Nenhuma associação encontrada.',
      data: tagsEmpresa,
    };
  }

  async findOne(id: number) {
    const tagEmpresa = await this.prisma.tag_empresa.findUnique({
      where: { id },
      include: { tag: true, empresa: true },
    });
    if (tagEmpresa) {
      return tagEmpresa;
    } else {
      throw new HttpException(
        `Associação com ID ${id} não encontrada.`,
        404,
      );
    }
  }

  async update(id: number, updateTagEmpresaDto: UpdateTagEmpresaDto) {
    await this.findOne(id);
    const tagEmpresaAtualizada = await this.prisma.tag_empresa.update({
      where: { id },
      data: updateTagEmpresaDto,
    });
    return tagEmpresaAtualizada;
  }

  async remove(id: number) {
    const tagEmpresa = await this.findOne(id);
    await this.prisma.tag_empresa.delete({ where: { id } });
    return `Associação entre Tag ${tagEmpresa.tag.nome} e Empresa ${tagEmpresa.empresa.nome} removida com sucesso.`;
  }
}
