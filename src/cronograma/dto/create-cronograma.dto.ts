import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsString, IsInt } from "class-validator";

export class CreateCronogramaDto {
  @ApiProperty({
    description: "Data de envio do cronograma",
    example: "2024-12-31T10:00:00Z",
  })
  @Type(() => Date)
  @IsDate()
  data_envio: Date;

  @ApiProperty({
    description: "Método de envio do cronograma",
    example: "Email",
  })
  @IsString()
  metodo_envio: string;

  @ApiProperty({
    description: "ID do usuário relacionado ao cronograma",
    example: 1,
  })
  @IsInt()
  id_usuario: number;
}
