-- AlterTable
ALTER TABLE "OptionFood" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "selected" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "OptionPrep" ADD COLUMN     "quantity" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "selected" BOOLEAN NOT NULL DEFAULT false;
