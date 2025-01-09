/*
  Warnings:

  - Added the required column `numero` to the `Pergunta` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pergunta" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pergunta" TEXT NOT NULL,
    "numero" INTEGER NOT NULL
);
INSERT INTO "new_Pergunta" ("id", "pergunta") SELECT "id", "pergunta" FROM "Pergunta";
DROP TABLE "Pergunta";
ALTER TABLE "new_Pergunta" RENAME TO "Pergunta";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
