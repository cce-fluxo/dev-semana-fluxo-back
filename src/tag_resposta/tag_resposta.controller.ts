import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TagRespostaService } from './tag_resposta.service';
import { CreateTagRespostaDto } from './dto/create-tag_resposta.dto';
import { UpdateTagRespostaDto } from './dto/update-tag_resposta.dto';

@Controller('tag-resposta')
export class TagRespostaController {
  constructor(private readonly tagRespostaService: TagRespostaService) {}

  @Post()
  create(@Body() createTagRespostaDto: CreateTagRespostaDto) {
    return this.tagRespostaService.create(createTagRespostaDto);
  }

  @Get()
  findAll() {
    return this.tagRespostaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tagRespostaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTagRespostaDto: UpdateTagRespostaDto) {
    return this.tagRespostaService.update(+id, updateTagRespostaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tagRespostaService.remove(+id);
  }
}
