-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "price" MONEY NOT NULL,
    "category" TEXT,
    "tags" TEXT[],

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "available" BOOLEAN NOT NULL DEFAULT true,
    "price" MONEY NOT NULL,
    "category" TEXT,
    "tags" TEXT[],

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "multiselect" BOOLEAN NOT NULL DEFAULT true,
    "multiOrder" BOOLEAN NOT NULL DEFAULT true,
    "freeQty" INTEGER NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OptionFood" (
    "optionId" INTEGER NOT NULL,
    "foodId" INTEGER NOT NULL,
    "price" MONEY,

    CONSTRAINT "OptionFood_pkey" PRIMARY KEY ("optionId","foodId")
);

-- CreateTable
CREATE TABLE "OptionPrep" (
    "id" SERIAL NOT NULL,
    "optionId" INTEGER NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" MONEY,

    CONSTRAINT "OptionPrep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_MenuToMenuItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FoodToMenuItem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_MenuToMenuItem_AB_unique" ON "_MenuToMenuItem"("A", "B");

-- CreateIndex
CREATE INDEX "_MenuToMenuItem_B_index" ON "_MenuToMenuItem"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FoodToMenuItem_AB_unique" ON "_FoodToMenuItem"("A", "B");

-- CreateIndex
CREATE INDEX "_FoodToMenuItem_B_index" ON "_FoodToMenuItem"("B");

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionFood" ADD CONSTRAINT "OptionFood_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionFood" ADD CONSTRAINT "OptionFood_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OptionPrep" ADD CONSTRAINT "OptionPrep_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToMenuItem" ADD CONSTRAINT "_MenuToMenuItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Menu"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MenuToMenuItem" ADD CONSTRAINT "_MenuToMenuItem_B_fkey" FOREIGN KEY ("B") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodToMenuItem" ADD CONSTRAINT "_FoodToMenuItem_A_fkey" FOREIGN KEY ("A") REFERENCES "Food"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FoodToMenuItem" ADD CONSTRAINT "_FoodToMenuItem_B_fkey" FOREIGN KEY ("B") REFERENCES "MenuItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
