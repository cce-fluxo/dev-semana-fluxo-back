import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalestraService } from './palestra.service';
import { CreatePalestraDto } from './dto/create-palestra.dto';
import { UpdatePalestraDto } from './dto/update-palestra.dto';

@Controller('palestra')
export class PalestraController {
  constructor(private readonly palestraService: PalestraService) {}

  @Post()
  create(@Body() createPalestraDto: CreatePalestraDto) {
    return this.palestraService.create(createPalestraDto);
  }

  @Get()
  findAll() {
    return this.palestraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palestraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalestraDto: UpdatePalestraDto) {
    return this.palestraService.update(+id, updatePalestraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palestraService.remove(+id);
  }
}
