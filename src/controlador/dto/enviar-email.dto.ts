import { ApiProperty } from "@nestjs/swagger";
import { IsArray, isArray, IsNumber, IsString } from "class-validator";

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
        example: ["https://www.amazon.com.br/", "https://www.youtube.com/watch?v=0TnO1GzKWPc"],
      })
    @IsArray()
    @IsString({ each: true })
    rotaPrint: string[];
  }
  