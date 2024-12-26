import { ApiProperty } from "@nestjs/swagger";

export class CreateUsuarioDto {

    @ApiProperty({
        description: "nome do usuário",
        example: "Joao do pe de feijao"
    })
      nome: string;

      @ApiProperty({
        description: "email do usuário",
        example: "email@email.com"
    })
      email: string;

      @ApiProperty({
        description: "telefone do usuario",
        example: "(21)2345678"
    })
      telefone: string;

      @ApiProperty({
        description: "lista de datas disponiveis para ir nas palestras",
        example: "12/12/2025 21/07/2001"
    })
      datas_disponiveis: Date;
}
