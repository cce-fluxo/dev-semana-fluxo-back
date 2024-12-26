-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "datas_disponiveis" DATETIME NOT NULL,
    "id_cronograma" INTEGER
);

-- CreateTable
CREATE TABLE "Pergunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pergunta" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Resposta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "texto_resposta" TEXT NOT NULL,
    "id_pergunta" INTEGER NOT NULL,
    CONSTRAINT "Resposta_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Resposta_escolhida" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_usuario" INTEGER NOT NULL,
    "id_pergunta" INTEGER NOT NULL,
    "id_resposta" INTEGER NOT NULL,
    CONSTRAINT "Resposta_escolhida_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resposta_escolhida_id_pergunta_fkey" FOREIGN KEY ("id_pergunta") REFERENCES "Pergunta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resposta_escolhida_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tag_empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_empresa" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    CONSTRAINT "Tag_empresa_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_empresa_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag_resposta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_resposta" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    CONSTRAINT "Tag_resposta_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_resposta_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag_palestra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_palestra" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER NOT NULL,
    CONSTRAINT "Tag_palestra_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_palestra_id_palestra_fkey" FOREIGN KEY ("id_palestra") REFERENCES "Palestra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Palestra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tema" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "horario" DATETIME NOT NULL,
    "Data" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "texto_explicativo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Cronograma" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data_envio" DATETIME NOT NULL,
    "metodo_envio" TEXT NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    CONSTRAINT "Cronograma_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Palestra_empresa" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_Palestra_empresa_A_fkey" FOREIGN KEY ("A") REFERENCES "Empresa" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Palestra_empresa_B_fkey" FOREIGN KEY ("B") REFERENCES "Palestra" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Cronograma_palestra" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_Cronograma_palestra_A_fkey" FOREIGN KEY ("A") REFERENCES "Cronograma" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Cronograma_palestra_B_fkey" FOREIGN KEY ("B") REFERENCES "Palestra" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_telefone_key" ON "Usuario"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_id_cronograma_key" ON "Usuario"("id_cronograma");

-- CreateIndex
CREATE UNIQUE INDEX "Cronograma_id_usuario_key" ON "Cronograma"("id_usuario");

-- CreateIndex
CREATE UNIQUE INDEX "_Palestra_empresa_AB_unique" ON "_Palestra_empresa"("A", "B");

-- CreateIndex
CREATE INDEX "_Palestra_empresa_B_index" ON "_Palestra_empresa"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_Cronograma_palestra_AB_unique" ON "_Cronograma_palestra"("A", "B");

-- CreateIndex
CREATE INDEX "_Cronograma_palestra_B_index" ON "_Cronograma_palestra"("B");
