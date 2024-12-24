import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CronogramaPalestraService } from './cronograma_palestra.service';
import { CreateCronogramaPalestraDto } from './dto/create-cronograma_palestra.dto';
import { UpdateCronogramaPalestraDto } from './dto/update-cronograma_palestra.dto';

@Controller('cronograma-palestra')
export class CronogramaPalestraController {
  constructor(private readonly cronogramaPalestraService: CronogramaPalestraService) {}

  @Post()
  create(@Body() createCronogramaPalestraDto: CreateCronogramaPalestraDto) {
    return this.cronogramaPalestraService.create(createCronogramaPalestraDto);
  }

  @Get()
  findAll() {
    return this.cronogramaPalestraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cronogramaPalestraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCronogramaPalestraDto: UpdateCronogramaPalestraDto) {
    return this.cronogramaPalestraService.update(+id, updateCronogramaPalestraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cronogramaPalestraService.remove(+id);
  }
}
