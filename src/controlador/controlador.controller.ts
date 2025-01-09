import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ControladorService } from './controlador.service';
import { CreateControladorDto } from './dto/create-controlador.dto';
import { UpdateControladorDto } from './dto/update-controlador.dto';

@Controller('/submit')
export class ControladorController {
  constructor(private readonly controladorService: ControladorService) {}

  @Post()
  async processar(@Body() dados: { usuarioId: number; respostas: { perguntaId: number; respostaId: number }[] }) {
    const { usuarioId, respostas } = dados;
    return await this.controladorService.processarRespostas(usuarioId, respostas);
  }
}
