import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreatePerguntaDto {
  @ApiProperty({
    description: "Texto da pergunta",
    example: "Qual a sua área de interesse?",
  })
  @IsString()
  pergunta: string;

  @ApiProperty({
    description: "numero da pergunta (Unique)",
    example: "1",
  })
  @IsNumber()
  numero: number;
}

