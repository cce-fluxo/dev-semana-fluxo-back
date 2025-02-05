import { Module, forwardRef } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CronogramaModule } from 'src/cronograma/cronograma.module';  // Importando o módulo de cronograma
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [forwardRef(() => CronogramaModule)],  // Usando forwardRef para evitar ciclo
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
})
export class UsuarioModule {}