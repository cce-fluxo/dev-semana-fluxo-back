import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagEmpresaService } from './tag_empresa.service';
import { CreateTagEmpresaDto } from './dto/create-tag_empresa.dto';
import { UpdateTagEmpresaDto } from './dto/update-tag_empresa.dto';

@Controller('tag-empresa')
export class TagEmpresaController {
  constructor(private readonly tagEmpresaService: TagEmpresaService) {}

  @Post()
  create(@Body() createTagEmpresaDto: CreateTagEmpresaDto) {
    return this.tagEmpresaService.create(createTagEmpresaDto);
  }

  @Get()
  findAll() {
    return this.tagEmpresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagEmpresaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagEmpresaDto: UpdateTagEmpresaDto) {
    return this.tagEmpresaService.update(+id, updateTagEmpresaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagEmpresaService.remove(+id);
  }
}
