import { Module } from '@nestjs/common';
import { PalestraService } from './palestra.service';
import { PalestraController } from './palestra.controller';

@Module({
  controllers: [PalestraController],
  providers: [PalestraService],
})
export class PalestraModule {}
