import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsString, IsArray, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

class RespostaDto {
  @ApiProperty({
    description: "ID da pergunta associada à resposta",
    example: 1,
  })
  @IsInt()
  perguntaId: number;

  @ApiProperty({
    description: "ID da resposta escolhida para a pergunta",
    example: 2,
  })
  @IsInt()
  respostaId: number;
}

export class CreateControladorDto {
  @ApiProperty({
    description: "ID do usuário que está enviando as respostas",
    example: 1,
  })
  @IsInt()
  usuarioId: number;

  @ApiProperty({
    description: "Método de envio utilizado pelo usuário",
    example: "Email",
  })
  @IsString()
  metodoEnvio: string;

  @ApiProperty({
    description: "Lista de respostas do usuário para as perguntas",
    type: [RespostaDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RespostaDto)
  respostas: RespostaDto[];
}
