-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "periodo" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data_usuario" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Data_usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pergunta" (
    "id" SERIAL NOT NULL,
    "pergunta" TEXT NOT NULL,

    CONSTRAINT "Pergunta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resposta" (
    "id" SERIAL NOT NULL,
    "texto_resposta" TEXT NOT NULL,
    "id_pergunta" INTEGER NOT NULL,

    CONSTRAINT "Resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resposta_escolhida" (
    "id" SERIAL NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "id_pergunta" INTEGER NOT NULL,
    "id_resposta" INTEGER NOT NULL,

    CONSTRAINT "Resposta_escolhida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag_empresa" (
    "id" SERIAL NOT NULL,
    "id_empresa" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Tag_empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag_resposta" (
    "id" SERIAL NOT NULL,
    "id_resposta" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Tag_resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tag_palestra" (
    "id" SERIAL NOT NULL,
    "id_palestra" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,

    CONSTRAINT "Tag_palestra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Palestra" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "horario" TIMESTAMP(3) NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Palestra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "texto_explicativo" TEXT NOT NULL,

    CONSTRAINT "Empresa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cronograma" (
    "id" SERIAL NOT NULL,
    "data_envio" TIMESTAMP(3) NOT NULL,
    "metodo_envio" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,

    CONSTRAINT "Cronograma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Palestra_empresa" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Palestra_empresa_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_Cronograma_palestra" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_Cronograma_palestra_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefone_key" ON "Usuario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Cronograma_id_usuario_key" ON "Cronograma"("id_usuario");

-- CreateIndex
CREATE INDEX "_Palestra_empresa_B_index" ON "_Palestra_empresa"("B");

-- CreateIndex
CREATE INDEX "_Cronograma_palestra_B_index" ON "_Cronograma_palestra"("B");

-- AddForeignKey
ALTER TABLE "Data_usuario" ADD CONSTRAINT "Data_usuario_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta" ADD CONSTRAINT "Resposta_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resposta_escolhida" ADD CONSTRAINT "Resposta_escolhida_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_empresa" ADD CONSTRAINT "Tag_empresa_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_empresa" ADD CONSTRAINT "Tag_empresa_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_resposta" ADD CONSTRAINT "Tag_resposta_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_resposta" ADD CONSTRAINT "Tag_resposta_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_palestra" ADD CONSTRAINT "Tag_palestra_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag_palestra" ADD CONSTRAINT "Tag_palestra_id_palestra_fkey" FOREIGN KEY ("id_palestra") REFERENCES "Palestra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cronograma" ADD CONSTRAINT "Cronograma_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Palestra_empresa" ADD CONSTRAINT "_Palestra_empresa_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Palestra_empresa" ADD CONSTRAINT "_Palestra_empresa_B_fkey" FOREIGN KEY ("B") REFERENCES "Palestra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Cronograma_palestra" ADD CONSTRAINT "_Cronograma_palestra_A_fkey" FOREIGN KEY ("A") REFERENCES "Cronograma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Cronograma_palestra" ADD CONSTRAINT "_Cronograma_palestra_B_fkey" FOREIGN KEY ("B") REFERENCES "Palestra"("id") ON DELETE CASCADE ON UPDATE CASCADE;
