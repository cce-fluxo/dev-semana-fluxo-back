import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateEmpresaDto {
  @ApiProperty({
    description: "Nome da empresa",
    example: "Tech Solutions",
  })
  @IsString()
  nome: string;

  @ApiProperty({
    description: "Tipo da empresa",
    example: "Tecnologia",
  })
  @IsString()
  tipo: string;

  @ApiProperty({
    description: "Texto explicativo sobre a empresa",
    example: "Empresa especializada em soluções tecnológicas para o mercado de IA.",
  })
  @IsString()
  texto_explicativo: string;
}
