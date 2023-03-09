import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import { ProductModel } from './model/product.model';

@Injectable()
export class ProductService {
  getAllProducts(): Promise<ProductModel[]> {
    const data = fs.readFileSync(
      __dirname + '/../../../src/feature/product/model/product.json',
      'utf8',
    );
    return JSON.parse(data);
  }

  getProductById(id: number): Promise<ProductModel> {
    let data: any = fs.readFileSync(
      __dirname + '/../../../src/feature/product/model/product.json',
      'utf8',
    );
    data = JSON.parse(data);

    // let ddd = data.find((e: ProductModel) => e.id == id);

    // if(ddd != null || ddd != undefined) return ddd;

    // throw new NotFoundException('No matching product');

    return (
      data.find((e: ProductModel) => e.id == id) ??
      new NotFoundException('No matching product')
    );
  }
}
