import { Module } from '@nestjs/common';
import { TagEmpresaService } from './tag_empresa.service';
import { TagEmpresaController } from './tag_empresa.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { TagModule } from 'src/tag/tag.module';
import { EmpresaModule } from 'src/empresa/empresa.module';

@Module({
  imports: [TagModule, EmpresaModule],
  controllers: [TagEmpresaController],
  providers: [TagEmpresaService, PrismaService],
})
export class TagEmpresaModule {}
