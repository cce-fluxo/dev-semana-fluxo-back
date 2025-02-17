/*
  Warnings:

  - A unique constraint covering the columns `[id_usuario]` on the table `Cronograma` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cronograma_id_usuario_key" ON "Cronograma"("id_usuario");
