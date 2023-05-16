import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      include: {
        rating: {
          select: {
            count: true,
            rate: true,
          },
        },
      },
    });
    return products;
    // const data = fs.readFileSync(
    //   __dirname + '/../../../src/feature/product/model/product.json',
    //   'utf8',
    // );
    // return JSON.parse(data);
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({
      where: {
        id: 1 * id,
      },
      include: {
        rating: {
          select: {
            count: true,
            rate: true,
          },
        },
      },
    });

    return product;
  }

  async addNewProduct(product: Product): Promise<any> {
    const prod = await this.prisma.product.create({
      data: {
        ...product,
        rating: {
          create: {
            count: (product as any).rating.count,
            rate: (product as any).rating.rate,
          },
        },
      },
    });

    return prod;
  }
}
