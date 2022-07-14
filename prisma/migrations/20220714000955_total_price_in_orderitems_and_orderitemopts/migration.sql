-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "totalPrice" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "totalPrice" MONEY NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "OrderItemOption" ADD COLUMN     "totalPrice" MONEY NOT NULL DEFAULT 0;
