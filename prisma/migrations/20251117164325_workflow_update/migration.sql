/*
  Warnings:

  - You are about to drop the column `description` on the `Workflow` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Workflow` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Workflow" DROP COLUMN "description",
DROP COLUMN "isActive",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Workflow" ADD CONSTRAINT "Workflow_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
