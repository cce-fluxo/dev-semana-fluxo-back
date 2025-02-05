import { Module, forwardRef } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioModule } from 'src/usuario/usuario.module';  // Importando o módulo de usuário
import { CronogramaController } from './cronograma.controller';

@Module({
  imports: [forwardRef(() => UsuarioModule)],  // Usando forwardRef para evitar ciclo
  controllers: [CronogramaController],
  providers: [CronogramaService, PrismaService],
  exports: [CronogramaService],
})
export class CronogramaModule {}
