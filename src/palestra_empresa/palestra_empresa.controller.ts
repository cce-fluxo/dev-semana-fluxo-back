import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PalestraEmpresaService } from './palestra_empresa.service';
import { CreatePalestraEmpresaDto } from './dto/create-palestra_empresa.dto';
import { UpdatePalestraEmpresaDto } from './dto/update-palestra_empresa.dto';

@Controller('palestra-empresa')
export class PalestraEmpresaController {
  constructor(private readonly palestraEmpresaService: PalestraEmpresaService) {}

  @Post()
  create(@Body() createPalestraEmpresaDto: CreatePalestraEmpresaDto) {
    return this.palestraEmpresaService.create(createPalestraEmpresaDto);
  }

  @Get()
  findAll() {
    return this.palestraEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.palestraEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePalestraEmpresaDto: UpdatePalestraEmpresaDto) {
    return this.palestraEmpresaService.update(+id, updatePalestraEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.palestraEmpresaService.remove(+id);
  }
}
