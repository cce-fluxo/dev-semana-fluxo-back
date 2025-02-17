-- DropForeignKey
ALTER TABLE "Cronograma" DROP CONSTRAINT "Cronograma_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_id_pergunta_fkey";

-- DropForeignKey
ALTER TABLE "Resposta_escolhida" DROP CONSTRAINT "Resposta_escolhida_id_pergunta_fkey";

-- DropForeignKey
ALTER TABLE "Resposta_escolhida" DROP CONSTRAINT "Resposta_escolhida_id_resposta_fkey";

-- DropForeignKey
ALTER TABLE "Resposta_escolhida" DROP CONSTRAINT "Resposta_escolhida_id_usuario_fkey";

-- DropForeignKey
ALTER TABLE "Tag_empresa" DROP CONSTRAINT "Tag_empresa_id_empresa_fkey";

-- DropForeignKey
ALTER TABLE "Tag_empresa" DROP CONSTRAINT "Tag_empresa_id_tag_fkey";

-- DropForeignKey
ALTER TABLE "Tag_palestra" DROP CONSTRAINT "Tag_palestra_id_palestra_fkey";

-- DropForeignKey
ALTER TABLE "Tag_palestra" DROP CONSTRAINT "Tag_palestra_id_tag_fkey";

-- DropForeignKey
ALTER TABLE "Tag_resposta" DROP CONSTRAINT "Tag_resposta_id_resposta_fkey";

-- DropForeignKey
ALTER TABLE "Tag_resposta" DROP CONSTRAINT "Tag_resposta_id_tag_fkey";

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_empresa" ADD CONSTRAINT "Tag_empresa_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_empresa" ADD CONSTRAINT "Tag_empresa_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_resposta" ADD CONSTRAINT "Tag_resposta_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_resposta" ADD CONSTRAINT "Tag_resposta_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_palestra" ADD CONSTRAINT "Tag_palestra_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_palestra" ADD CONSTRAINT "Tag_palestra_id_palestra_fkey" FOREIGN KEY ("id_palestra") REFERENCES "Palestra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cronograma" ADD CONSTRAINT "Cronograma_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;
