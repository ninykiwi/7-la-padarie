/*
  Warnings:

  - You are about to drop the column `isActive` on the `Fila` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Fila" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "paes" INTEGER NOT NULL,
    "valor" REAL NOT NULL
);
INSERT INTO "new_Fila" ("id", "nome", "paes", "valor") SELECT "id", "nome", "paes", "valor" FROM "Fila";
DROP TABLE "Fila";
ALTER TABLE "new_Fila" RENAME TO "Fila";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
