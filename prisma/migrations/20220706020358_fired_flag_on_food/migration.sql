/*
  Warnings:

  - You are about to drop the column `menuItemNotes` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Food" ADD COLUMN     "mustBeFired" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "menuItemNotes",
ADD COLUMN     "cooked" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ready" BOOLEAN NOT NULL DEFAULT false;
