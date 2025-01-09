/*
  Warnings:

  - A unique constraint covering the columns `[numero]` on the table `Pergunta` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Pergunta_numero_key" ON "Pergunta"("numero");
