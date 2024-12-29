import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DataUsuarioService } from './data_usuario.service';
import { CreateDataUsuarioDto } from './dto/create-data_usuario.dto';
import { UpdateDataUsuarioDto } from './dto/update-data_usuario.dto';

@Controller('data-usuario')
export class DataUsuarioController {
  constructor(private readonly dataUsuarioService: DataUsuarioService) {}

  @Post()
  create(@Body() createDataUsuarioDto: CreateDataUsuarioDto) {
    return this.dataUsuarioService.create(createDataUsuarioDto);
  }

  @Get()
  findAll() {
    return this.dataUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dataUsuarioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDataUsuarioDto: UpdateDataUsuarioDto) {
    return this.dataUsuarioService.update(+id, updateDataUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dataUsuarioService.remove(+id);
  }
}
