import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const u = await prisma.user.findFirst()
  console.log(u)
}

main()
