import { Module } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { CronogramaController } from './cronograma.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({

  imports: [UsuarioModule],
  controllers: [CronogramaController],
  providers: [CronogramaService, PrismaService],
})
export class CronogramaModule {}
