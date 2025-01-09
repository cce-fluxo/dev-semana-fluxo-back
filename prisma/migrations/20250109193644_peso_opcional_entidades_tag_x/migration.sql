-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tag_empresa" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_empresa" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER,
    CONSTRAINT "Tag_empresa_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_empresa_id_empresa_fkey" FOREIGN KEY ("id_empresa") REFERENCES "Empresa" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tag_empresa" ("id", "id_empresa", "id_tag", "peso") SELECT "id", "id_empresa", "id_tag", "peso" FROM "Tag_empresa";
DROP TABLE "Tag_empresa";
ALTER TABLE "new_Tag_empresa" RENAME TO "Tag_empresa";
CREATE TABLE "new_Tag_palestra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_palestra" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER,
    CONSTRAINT "Tag_palestra_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_palestra_id_palestra_fkey" FOREIGN KEY ("id_palestra") REFERENCES "Palestra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tag_palestra" ("id", "id_palestra", "id_tag", "peso") SELECT "id", "id_palestra", "id_tag", "peso" FROM "Tag_palestra";
DROP TABLE "Tag_palestra";
ALTER TABLE "new_Tag_palestra" RENAME TO "Tag_palestra";
CREATE TABLE "new_Tag_resposta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_resposta" INTEGER NOT NULL,
    "id_tag" INTEGER NOT NULL,
    "peso" INTEGER,
    CONSTRAINT "Tag_resposta_id_tag_fkey" FOREIGN KEY ("id_tag") REFERENCES "Tag" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tag_resposta_id_resposta_fkey" FOREIGN KEY ("id_resposta") REFERENCES "Resposta" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Tag_resposta" ("id", "id_resposta", "id_tag", "peso") SELECT "id", "id_resposta", "id_tag", "peso" FROM "Tag_resposta";
DROP TABLE "Tag_resposta";
ALTER TABLE "new_Tag_resposta" RENAME TO "Tag_resposta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
