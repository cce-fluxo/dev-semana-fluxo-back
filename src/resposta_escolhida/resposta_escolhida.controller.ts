import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RespostaEscolhidaService } from './resposta_escolhida.service';
import { CreateRespostaEscolhidaDto } from './dto/create-resposta_escolhida.dto';
import { UpdateRespostaEscolhidaDto } from './dto/update-resposta_escolhida.dto';

@Controller('resposta-escolhida')
export class RespostaEscolhidaController {
  constructor(private readonly respostaEscolhidaService: RespostaEscolhidaService) {}

  @Post()
  create(@Body() createRespostaEscolhidaDto: CreateRespostaEscolhidaDto) {
    return this.respostaEscolhidaService.create(createRespostaEscolhidaDto);
  }

  @Get()
  findAll() {
    return this.respostaEscolhidaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.respostaEscolhidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRespostaEscolhidaDto: UpdateRespostaEscolhidaDto) {
    return this.respostaEscolhidaService.update(+id, updateRespostaEscolhidaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.respostaEscolhidaService.remove(+id);
  }
}
