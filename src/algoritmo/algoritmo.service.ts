import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AlgoritmoService {
    async recomendarPalestras (usuarioId: number){


        return usuarioId;
    }
}
