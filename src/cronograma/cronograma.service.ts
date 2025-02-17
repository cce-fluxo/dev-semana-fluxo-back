import { forwardRef, HttpException, Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { UpdateCronogramaDto } from './dto/update-cronograma.dto';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class CronogramaService {
  constructor(
    private prisma: PrismaService,
    @Inject(forwardRef(() => UsuarioService))
    private usuario: UsuarioService,
  ) {}

  async create(createCronogramaDto: CreateCronogramaDto) {
    
    await this.usuario.findOne(createCronogramaDto.id_usuario);

  // Tenta encontrar um cronograma já existente para esse usuário
  const cronogramaExistente = await this.prisma.cronograma.findUnique({
    where: { id_usuario: createCronogramaDto.id_usuario },
  });

  if (cronogramaExistente) {
    // Se já existir, atualiza (patch)
    const cronogramaAtualizado = await this.prisma.cronograma.update({
      where: { id: cronogramaExistente.id },
      data: createCronogramaDto,
    });
    return cronogramaAtualizado;
    
  } else {
    // Se não existir, cria um novo cronograma
    const novoCronograma = await this.prisma.cronograma.create({
      data: createCronogramaDto,
    });
    return novoCronograma;
  }
  }

  async findAll() {
    const cronogramas = await this.prisma.cronograma.findMany({
      include: { palestras: true, usuario: true },
    });
    return {
      message: cronogramas.length
        ? `Encontrados ${cronogramas.length} cronograma(s).`
        : 'Nenhum cronograma encontrado.',
      data: cronogramas,
    };
  }

  async findUserCronograma(idUsuario: number) {
  
    // Busca o cronograma do usuário junto com as palestras associadas
    const cronograma = await this.prisma.cronograma.findUnique({
      where: { id_usuario: idUsuario },
      include: { palestras: true }, // Carrega as palestras relacionadas
    });
  
    if (!cronograma) {
      throw new HttpException(`Cronograma não encontrado para o usuário ${idUsuario}.`, 404);
    }
  
    return cronograma; 
  }

  async findOne(id: number) {
    const cronograma = await this.prisma.cronograma.findUnique({
      where: { id },
      include: { palestras: true, usuario: true },
    });
    if (cronograma) {
      return cronograma;
    } else {
      throw new HttpException(`Cronograma com ID ${id} não encontrado.`, 404);
    }
  }

  async update(id: number, updateCronogramaDto: UpdateCronogramaDto) {
    await this.findOne(id); // Verifica se o cronograma existe
    try {
      const cronogramaAtualizado = await this.prisma.cronograma.update({
        where: { id },
        data: updateCronogramaDto,
      });
      return cronogramaAtualizado;
    } catch (error) {
      throw new HttpException('Erro ao atualizar cronograma.', 400);
    }
  }

  async remove(id: number) {
    const cronograma = await this.findOne(id); // Verifica se o cronograma existe
    try {
      await this.prisma.cronograma.delete({ where: { id } });
      const mensagemSucesso = `Cronograma do usuário ${cronograma.usuario.nome} removido com sucesso.`
      return mensagemSucesso;
    } catch (error) {
      throw new HttpException('Erro ao remover cronograma.', 400);
    }
  }
}
