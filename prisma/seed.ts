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

async function seedProducts() {
  const products = await prisma.product.createMany({
    data: [
      {
        title: 'onyeka laptop bag Backpack, Fits 15 Laptops',
        price: 109.95,
        description:
          'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
      },
      {
        title: 'Promise Big Head Premium Slim Fit T-Shirts ',
        price: 22.3,
        description:
          'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.',
        category: "men's clothing",
        image:
          'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
      },
      {
        title: 'Mens Cotton Jacket',
        price: 55.99,
        description:
          'great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      },
      {
        title: 'Mens Casual Slim Fit',
        price: 15.99,
        description:
          'The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.',
        category: "men's clothing",
        image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
      },
      {
        title:
          "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        price: 695,
        description:
          "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        category: 'jewelery',
        image:
          'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
      },
    ],
  });

  const reviews = await prisma.rating.createMany({
    data: [
      {
        productId: 1,
        rate: 3,
        count: 30,
      },
      {
        productId: 2,
        rate: 5,
        count: 2,
      },
      {
        productId: 3,
        rate: 2,
        count: 30,
      },
      {
        productId: 4,
        rate: 1,
        count: 10,
      },
    ],
  });

  console.log(products, reviews);
}
main();
seedProducts();
