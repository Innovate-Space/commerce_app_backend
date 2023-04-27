import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  await prisma.user.createMany({
    data: [
      {
        firstName: 'Kingsley',
        username: 'sleez',
        lastName: 'Henry',
        password: '12345',
        email: 'kingsley@gmail.com',
        isEmailVerified: false,
      },
      {
        firstName: 'Tochukwu',
        username: 'tochy',
        lastName: 'Okoro',
        password: '12345',
        email: 'tochi@gmail.com',
        isEmailVerified: true,
      },
      {
        firstName: 'mazi',
        username: 'mazinwa',
        lastName: 'Henry',
        password: '12345',
        email: 'mazi@gmail.com',
        isEmailVerified: false,
      },
    ],
  });
}

main();
