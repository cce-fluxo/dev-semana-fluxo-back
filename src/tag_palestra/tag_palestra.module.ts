import { Module } from '@nestjs/common';
import { TagPalestraService } from './tag_palestra.service';
import { TagPalestraController } from './tag_palestra.controller';

@Module({
  controllers: [TagPalestraController],
  providers: [TagPalestraService],
})
export class TagPalestraModule {}
