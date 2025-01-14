import { Module } from '@nestjs/common';
import { ControladorService } from './controlador.service';
import { ControladorController } from './controlador.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { AlgoritmoService } from 'src/algoritmo/algoritmo.service';

@Module({
  providers: [ControladorService, AlgoritmoService, PrismaService],
  controllers: [ControladorController],
  exports: [ControladorService],
})
export class ControladorModule {}
