import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { ControladorService } from './controlador.service';
import { CreateControladorDto } from './dto/create-controlador.dto';

@Controller('submit')
export class ControladorController {
  constructor(private readonly controladorService: ControladorService) {}

  @Post()
  @ApiOperation({ summary: 'Processa respostas e gera cronograma' })
  @ApiBody({ type: CreateControladorDto })
  async processar(@Body() dados: CreateControladorDto) {
    const { usuarioId, metodoEnvio, respostas } = dados;
    return await this.controladorService.processarRespostas(usuarioId, metodoEnvio, respostas);
  }
}
