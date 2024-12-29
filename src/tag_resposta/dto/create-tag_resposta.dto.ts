import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

//Esta classe relaciona Tags às respostas. Exemplo: a resposta "Nao tenho nada contra tecnologia" tem peso 5 na Tag Tecnologia. 
export class CreateTagRespostaDto {
  @ApiProperty({
    description: "ID da resposta relacionada",
    example: 1,
  })
  @IsInt()
  id_resposta: number;

  @ApiProperty({
    description: "ID da tag relacionada",
    example: 2,
  })
  @IsInt()
  id_tag: number;

  @ApiProperty({
    description: "Peso da tag para a resposta",
    example: 5,
  })
  @IsInt()
  peso: number;
}
