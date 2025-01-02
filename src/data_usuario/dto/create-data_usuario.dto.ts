import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsInt } from "class-validator";

export class CreateDataUsuarioDto {
  @ApiProperty({
    description: "Data disponível do usuário",
    example: "2024-12-31T10:00:00Z",
  })
   @Type(() => Date)
  @IsDate()
  data: Date;

  @ApiProperty({
    description: "ID do usuário relacionado",
    example: 1,
  })
  @IsInt()
  id_usuario: number;
}

