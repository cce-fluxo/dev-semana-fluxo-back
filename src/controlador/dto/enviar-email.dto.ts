import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

// dto/enviar-email.dto.ts
export class EnviarEmailDto {
    @ApiProperty({
        description: "Id do usuario",
        example: 1,
      })
      @IsNumber()
    usuarioId: number;

    @ApiProperty({
        description: "Rota da pagina que sera tirado o print",
        example: "https://www.amazon.com.br/",
      })
      @IsString()
    rotaPrint: string;
  }
  