import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsString } from "class-validator";

export class CreatePalestraDto {
  @ApiProperty({
    description: "Nome da palestra",
    example: "Palestra sobre Inteligência Artificial",
  })
  @IsString()
  nome: string;

  @ApiProperty({
    description: "Tema da palestra",
    example: "Tecnologias emergentes em IA",
  })
  @IsString()
  tema: string;

  @ApiProperty({
    description: "Local da palestra",
    example: "Auditório A",
  })
  @IsString()
  local: string;

  @ApiProperty({
    description: "Horário da palestra",
    example: "2024-12-31T10:00:00Z",
  })
  @IsDateString()
  horario: string;

  @ApiProperty({
    description: "Data da palestra",
    example: "2024-12-31T10:00:00Z",
  })
  @IsDateString()
  Data: string;
}

