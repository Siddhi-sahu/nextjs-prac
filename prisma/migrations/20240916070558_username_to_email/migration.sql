/*
  Warnings:

  - You are about to drop the column `username` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- Drop the unique index on username
DROP INDEX IF EXISTS "User_username_key";

-- Add the `email` column temporarily without the `NOT NULL` constraint
ALTER TABLE "User" 
DROP COLUMN "username",
ADD COLUMN "email" TEXT;

-- (Optional) Add default values for existing rows if needed
UPDATE "User" SET "email" = 'placeholder@example.com' WHERE "email" IS NULL;

-- Now, enforce the NOT NULL constraint and create the unique index on email
ALTER TABLE "User" ALTER COLUMN "email" SET NOT NULL;

-- Create a unique index for email
CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
