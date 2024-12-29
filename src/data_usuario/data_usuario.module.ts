import { Module } from '@nestjs/common';
import { DataUsuarioService } from './data_usuario.service';
import { DataUsuarioController } from './data_usuario.controller';

@Module({
  controllers: [DataUsuarioController],
  providers: [DataUsuarioService],
})
export class DataUsuarioModule {}
