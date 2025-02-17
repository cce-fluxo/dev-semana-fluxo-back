import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { ControladorService } from './controlador.service';
import { CreateControladorDto } from './dto/create-controlador.dto';
import { EnviarEmailDto } from './dto/enviar-email.dto'; // Importe o DTO

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

  // Novo endpoint para enviar o email com o cronograma
  @Post('enviar-email')
  @ApiOperation({ summary: 'Envia o email com o cronograma em PDF' })
  @ApiBody({ type: EnviarEmailDto }) // Usando o DTO correto aqui
  async enviarEmail(@Body() dados: EnviarEmailDto) {
    const { usuarioId, rotaPrint } = dados;
    await this.controladorService.enviarEmail(usuarioId, rotaPrint);
    return { message: 'Email enviado com sucesso!' };
  }
}
