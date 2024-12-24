import { Injectable } from '@nestjs/common';
import { CreateTagRespostaDto } from './dto/create-tag_resposta.dto';
import { UpdateTagRespostaDto } from './dto/update-tag_resposta.dto';

@Injectable()
export class TagRespostaService {
  create(createTagRespostaDto: CreateTagRespostaDto) {
    return 'This action adds a new tagResposta';
  }

  findAll() {
    return `This action returns all tagResposta`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tagResposta`;
  }

  update(id: number, updateTagRespostaDto: UpdateTagRespostaDto) {
    return `This action updates a #${id} tagResposta`;
  }

  remove(id: number) {
    return `This action removes a #${id} tagResposta`;
  }
}
