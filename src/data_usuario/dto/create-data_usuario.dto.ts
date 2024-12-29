import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsInt } from "class-validator";

export class CreateDataUsuarioDto {
  @ApiProperty({
    description: "Data disponível do usuário",
    example: "2024-12-31T10:00:00Z",
  })
  @IsDateString()
  data: string;

  @ApiProperty({
    description: "ID do usuário relacionado",
    example: 1,
  })
  @IsInt()
  id_usuario: number;
}

