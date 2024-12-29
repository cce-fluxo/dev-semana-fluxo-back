import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString } from "class-validator";

export class CreateRespostaDto {
  @ApiProperty({
    description: "Texto da resposta",
    example: "Engenharia de Computação",
  })
  @IsString()
  texto_resposta: string;

  @ApiProperty({
    description: "ID da pergunta relacionada",
    example: 1,
  })
  @IsInt()
  id_pergunta: number;
}

