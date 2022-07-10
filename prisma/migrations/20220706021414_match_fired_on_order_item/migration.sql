/*
  Warnings:

  - You are about to drop the column `cooked` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "cooked",
ADD COLUMN     "fired" BOOLEAN NOT NULL DEFAULT false;
