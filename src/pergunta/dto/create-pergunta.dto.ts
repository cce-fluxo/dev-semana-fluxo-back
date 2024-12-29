import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePerguntaDto {
  @ApiProperty({
    description: "Texto da pergunta",
    example: "Qual a sua área de interesse?",
  })
  @IsString()
  pergunta: string;
}

