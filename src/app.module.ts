import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { CronogramaPalestraModule } from './cronograma_palestra/cronograma_palestra.module';
import { CronogramaModule } from './cronograma/cronograma.module';
import { PalestraModule } from './palestra/palestra.module';
import { PalestraEmpresaModule } from './palestra_empresa/palestra_empresa.module';
import { EmpresaModule } from './empresa/empresa.module';
import { TagModule } from './tag/tag.module';
import { TagEmpresaModule } from './tag_empresa/tag_empresa.module';
import { TagPalestraModule } from './tag_palestra/tag_palestra.module';
import { TagRespostaModule } from './tag_resposta/tag_resposta.module';
import { RespostaTagModule } from './resposta_tag/resposta_tag.module';
import { RespostaModule } from './resposta/resposta.module';
import { RespostaEscolhidaModule } from './resposta_escolhida/resposta_escolhida.module';
import { PerguntaModule } from './pergunta/pergunta.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [UsuarioModule, PerguntaModule, RespostaEscolhidaModule, RespostaModule, RespostaTagModule, TagRespostaModule, TagPalestraModule, TagEmpresaModule, TagModule, EmpresaModule, PalestraEmpresaModule, PalestraModule, CronogramaModule, CronogramaPalestraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
