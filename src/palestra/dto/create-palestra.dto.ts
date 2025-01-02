import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";

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
  @Type(() => Date)
  @IsDate()
  horario: Date;

  @ApiProperty({
    description: "Data da palestra",
    example: "2024-12-31T10:00:00Z",
  })
  @Type(() => Date)
  @IsDate()
  Data: Date;
}

