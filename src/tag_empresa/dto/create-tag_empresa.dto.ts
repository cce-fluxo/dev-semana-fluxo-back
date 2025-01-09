import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

//Esta classe relaciona Tags às empresas. Exemplo: a empresa "BioTech" tem peso 10 na Tag Tecnologia. 
export class CreateTagEmpresaDto {
  @ApiProperty({
    description: "ID da empresa relacionada",
    example: 1,
  })
  @IsInt()
  id_empresa: number;

  @ApiProperty({
    description: "ID da tag relacionada",
    example: 2,
  })
  @IsInt()
  id_tag: number;

  /*@ApiProperty({
    description: "Peso da tag para a empresa",
    example: 10,
  })
  @IsInt()
  peso: number;*/
}

