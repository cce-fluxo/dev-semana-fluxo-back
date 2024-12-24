import { Module } from '@nestjs/common';
import { PalestraEmpresaService } from './palestra_empresa.service';
import { PalestraEmpresaController } from './palestra_empresa.controller';

@Module({
  controllers: [PalestraEmpresaController],
  providers: [PalestraEmpresaService],
})
export class PalestraEmpresaModule {}
