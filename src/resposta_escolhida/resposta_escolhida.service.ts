import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRespostaEscolhidaDto } from './dto/create-resposta_escolhida.dto';
import { UpdateRespostaEscolhidaDto } from './dto/update-resposta_escolhida.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PerguntaService } from 'src/pergunta/pergunta.service';
import { RespostaService } from 'src/resposta/resposta.service';

@Injectable()
export class RespostaEscolhidaService {
  constructor(
    private prisma: PrismaService,
    private usuario: UsuarioService,
    private pergunta: PerguntaService,
    private resposta: RespostaService,
  ) {}

  async create(createRespostaEscolhidaDto: CreateRespostaEscolhidaDto) {
    await this.usuario.findOne(createRespostaEscolhidaDto.id_usuario); //Verifica se o usuario existe
    await this.pergunta.findOne(createRespostaEscolhidaDto.id_pergunta); //Verifica se a pergunta existe
    await this.resposta.findOne(createRespostaEscolhidaDto.id_resposta); //Verifica se a resposta existe
    try {
      const respostaEscolhida = await this.prisma.resposta_escolhida.create({
        data: createRespostaEscolhidaDto,
      });
      return respostaEscolhida;
    } catch (error) {
      throw new HttpException('Erro ao criar RespostaEscolhida.', 500);
    }
  }

  async findAll() {
    const respostasEscolhidas = await this.prisma.resposta_escolhida.findMany();
    return {
      message: respostasEscolhidas.length
        ? `Encontradas ${respostasEscolhidas.length} respostas escolhidas.`
        : 'Nenhuma resposta escolhida encontrada.',
      data: respostasEscolhidas,
    };
  }

  async findOne(id: number) {
    const respostaEscolhida = await this.prisma.resposta_escolhida.findUnique({
      where: { id },
    });
    if (respostaEscolhida) {
      return respostaEscolhida;
    } else {
      throw new HttpException(
        `RespostaEscolhida com ID ${id} não encontrada.`,
        404,
      );
    }
  }

  async update(id: number, updateRespostaEscolhidaDto: UpdateRespostaEscolhidaDto) {

    await this.findOne(id); //verifica se a resposta_escolhida existe
    const respostaEscolhidaAtualizada =
      await this.prisma.resposta_escolhida.update({
        where: { id },
        data: updateRespostaEscolhidaDto,
      });
    return respostaEscolhidaAtualizada;
  }

  async remove(id: number) {
    const respostaEscolhida = await this.findOne(id);
    await this.prisma.resposta_escolhida.delete({
      where: { id },
    });
    return `RespostaEscolhida com ID ${respostaEscolhida.id} removida com sucesso.`;
  }
}
