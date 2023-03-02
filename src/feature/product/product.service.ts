import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class ProductService {

  getAllProducts(){
    const data = fs.readFileSync(__dirname+'/../../../src/feature/product/model/product.json','utf8');
    return JSON.parse(data);
  }

  getProductById(id: number){
    let data: any = fs.readFileSync(__dirname+'/../../../src/feature/product/model/product.json','utf8');
    data = JSON.parse(data);

    return data.find(e => e.id == id) ?? new NotFoundException('No matching product');
  }

  
} 