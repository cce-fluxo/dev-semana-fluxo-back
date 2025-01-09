import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AlgoritmoService {
  constructor(private readonly prisma: PrismaService) {}

  // Função para calcular relevância
  calcularRelevancia(usuarioTags: string[], palestraTags: string[]): number {
    // Conta as ocorrências de cada tag no usuário
    const usuarioTagCount = usuarioTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1; // Incrementa ou inicializa com 1
      return acc;
    }, {});

    // Conta as ocorrências de cada tag na palestra
    const palestraTagCount = palestraTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1; // Incrementa ou inicializa com 1
      return acc;
    }, {});

    // Calcula a relevância multiplicando as contagens das tags em comum
    return Object.keys(usuarioTagCount).reduce((relevancia, tag) => {
      if (palestraTagCount[tag]) {
        relevancia += usuarioTagCount[tag] * palestraTagCount[tag];
      }
      return relevancia;
    }, 0);
  }

  async recomendarPalestras(usuarioId: number) {
    // Obter tags associadas ao usuário
    const tagsUsuario = await this.prisma.resposta_escolhida.findMany({
      where: { id_usuario: usuarioId },
      include: {
        resposta: {
          include: {
            tags: {
              select: { tag: { select: { nome: true } } }, // Seleciona o nome das tags
            },
          },
        },
      },
    });

    const usuarioTags = tagsUsuario.flatMap((respostaEscolhida) =>
      respostaEscolhida.resposta.tags.map((tagRel) => tagRel.tag.nome) // Extrai o nome da tag
    );

    // Obter palestras e suas tags
    const palestras = await this.prisma.palestra.findMany({
      include: {
        tags: {
          select: { tag: { select: { nome: true } } }, // Seleciona o nome das tags
        },
      },
    });

    // Calcular relevância e ordenar as palestras
    const palestrasOrdenadas = palestras
      .map((palestra) => ({
        palestra,
        relevancia: this.calcularRelevancia(
          usuarioTags,
          palestra.tags.map((tagRel) => tagRel.tag.nome) // Extrai o nome da tag
        ),
      }))
      .sort((a, b) => b.relevancia - a.relevancia);

    // Retornar apenas as palestras
    return palestrasOrdenadas.map((item) => item.palestra);
  }
}
