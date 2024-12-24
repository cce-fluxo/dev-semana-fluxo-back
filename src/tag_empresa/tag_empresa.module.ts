import { Module } from '@nestjs/common';
import { TagEmpresaService } from './tag_empresa.service';
import { TagEmpresaController } from './tag_empresa.controller';

@Module({
  controllers: [TagEmpresaController],
  providers: [TagEmpresaService],
})
export class TagEmpresaModule {}
