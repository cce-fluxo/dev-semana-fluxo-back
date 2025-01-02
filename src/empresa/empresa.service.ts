import { Injectable, HttpException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(createEmpresaDto: CreateEmpresaDto) {
    try {
      const empresa = await this.prisma.empresa.create({ data: createEmpresaDto });
      return empresa;
    } catch (error) {
      throw new HttpException('Erro ao criar empresa. Verifique os dados enviados.', 400);
    }
  }

  async findAll() {
    const empresas = await this.prisma.empresa.findMany({
      include: {
        tags: true,
        palestras: true,
      },
    });

    return {
      message: empresas.length
        ? `Encontradas ${empresas.length} empresas.`
        : 'Nenhuma empresa encontrada.',
      data: empresas,
    };
  }

  async findOne(id: number) {
    const empresa = await this.prisma.empresa.findUnique({
      where: { id },
      include: {
        tags: true,
        palestras: true,
      },
    });

    if (!empresa) {
      throw new HttpException(`Empresa com ID ${id} não encontrada.`, 404);
    }

    return empresa;
  }

  async update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    await this.findOne(id); // Verifica se a empresa existe antes de atualizar

    const empresaAtualizada = await this.prisma.empresa.update({
      where: { id },
      data: updateEmpresaDto,
    });

    return empresaAtualizada;
  }

  async remove(id: number) {
    const empresa = await this.findOne(id); // Verifica se a empresa existe antes de remover

    await this.prisma.empresa.delete({
      where: { id },
    });

    return `Empresa [${empresa.nome}] com ID ${id} removida com sucesso.`;
  }
}
