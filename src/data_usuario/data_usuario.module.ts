import { Module } from '@nestjs/common';
import { DataUsuarioService } from './data_usuario.service';
import { DataUsuarioController } from './data_usuario.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [UsuarioModule],
  controllers: [DataUsuarioController],
  providers: [DataUsuarioService, PrismaService],
})
export class DataUsuarioModule {}
