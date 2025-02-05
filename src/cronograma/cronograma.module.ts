import { Module } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CronogramaController } from './cronograma.controller';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  controllers: [CronogramaController],
  providers: [CronogramaService, PrismaService, UsuarioService],
  exports: [CronogramaService],
})
export class CronogramaModule {}
