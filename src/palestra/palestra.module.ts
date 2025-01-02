import { Module } from '@nestjs/common';
import { PalestraService } from './palestra.service';
import { PalestraController } from './palestra.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  exports: [PalestraService],
  controllers: [PalestraController],
  providers: [PalestraService, PrismaService],
})
export class PalestraModule {}
