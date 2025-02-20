import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUsuarioDto {
  @ApiProperty({
    description: "nome do usuário",
    example: "Joao do pe de feijao",
  })
  @IsString()
  nome: string;

  @ApiProperty({
    description: "email do usuário",
    example: "email@email.com",
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Curso do usuario",
    example: "Engenharia eletronica e de computacao",
  })
  @IsString()
  curso: string;

  @ApiProperty({
    description: "Periodo do usuario",
    example: "5",
  })
  @IsString()
 periodo: string;

 emailEnviado: boolean;
}