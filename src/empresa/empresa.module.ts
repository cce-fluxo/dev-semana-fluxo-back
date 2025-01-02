import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [EmpresaService],
  controllers: [EmpresaController],
  providers: [EmpresaService, PrismaService],
})
export class EmpresaModule {}
