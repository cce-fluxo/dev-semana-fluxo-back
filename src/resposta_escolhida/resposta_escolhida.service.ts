import { Injectable } from '@nestjs/common';
import { CreateRespostaEscolhidaDto } from './dto/create-resposta_escolhida.dto';
import { UpdateRespostaEscolhidaDto } from './dto/update-resposta_escolhida.dto';

@Injectable()
export class RespostaEscolhidaService {
  create(createRespostaEscolhidaDto: CreateRespostaEscolhidaDto) {
    return 'This action adds a new respostaEscolhida';
  }

  findAll() {
    return `This action returns all respostaEscolhida`;
  }

  findOne(id: number) {
    return `This action returns a #${id} respostaEscolhida`;
  }

  update(id: number, updateRespostaEscolhidaDto: UpdateRespostaEscolhidaDto) {
    return `This action updates a #${id} respostaEscolhida`;
  }

  remove(id: number) {
    return `This action removes a #${id} respostaEscolhida`;
  }
}
