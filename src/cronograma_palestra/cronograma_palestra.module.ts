import { Module } from '@nestjs/common';
import { CronogramaPalestraService } from './cronograma_palestra.service';
import { CronogramaPalestraController } from './cronograma_palestra.controller';

@Module({
  controllers: [CronogramaPalestraController],
  providers: [CronogramaPalestraService],
})
export class CronogramaPalestraModule {}
