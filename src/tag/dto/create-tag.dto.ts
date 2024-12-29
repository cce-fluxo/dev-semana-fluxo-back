import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTagDto {
  @ApiProperty({
    description: "Nome da tag",
    example: "Tecnologia",
  })
  @IsString()
  nome: string;
}

