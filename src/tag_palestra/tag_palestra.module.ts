import { Module } from '@nestjs/common';
import { TagPalestraService } from './tag_palestra.service';
import { TagPalestraController } from './tag_palestra.controller';
import { TagModule } from 'src/tag/tag.module';
import { PalestraModule } from 'src/palestra/palestra.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [TagModule, PalestraModule],
  controllers: [TagPalestraController],
  providers: [TagPalestraService, PrismaService],
})
export class TagPalestraModule {}
