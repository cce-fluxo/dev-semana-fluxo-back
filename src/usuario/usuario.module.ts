import { Module, forwardRef } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioController } from './usuario.controller';
import { CronogramaService } from 'src/cronograma/cronograma.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, CronogramaService],
  exports: [UsuarioService],
})
export class UsuarioModule {}