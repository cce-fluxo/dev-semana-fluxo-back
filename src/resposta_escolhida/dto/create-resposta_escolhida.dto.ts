import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

//Esta Entidade representa qual foi a resposta escolhida por cada usuário para cada pergunta. Exemplo: O usuario de ID 1 respondeu C para a pergunta 2.
export class CreateRespostaEscolhidaDto {
  @ApiProperty({
    description: "ID do usuário relacionado",
    example: 1,
  })
  @IsInt()
  id_usuario: number;

  @ApiProperty({
    description: "ID da pergunta relacionada",
    example: 2,
  })
  @IsInt()
  id_pergunta: number;

  @ApiProperty({
    description: "ID da resposta escolhida",
    example: 3,
  })
  @IsInt()
  id_resposta: number;
}

