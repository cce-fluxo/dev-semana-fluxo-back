import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

//Esta classe relaciona Tags às Palestras. Exemplo: a Palestra "Desenvolvimento de BioReatores" tem peso 8 na Tag Tecnologia. 
export class CreateTagPalestraDto {
  @ApiProperty({
    description: "ID da palestra relacionada",
    example: 1,
  })
  @IsInt()
  id_palestra: number;

  @ApiProperty({
    description: "ID da tag relacionada",
    example: 2,
  })
  @IsInt()
  id_tag: number;

  @ApiProperty({
    description: "Peso da tag para a palestra",
    example: 8,
  })
  @IsInt()
  peso: number;
}

