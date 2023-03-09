import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class CartService {
  getUserCart(id: number) {
    const rawData = fs.readFileSync(
      __dirname + '/../../../src/feature/cart/model/cart.json',
      'utf8',
    );
    console.log(id);
    // fs.writeFileSync('mad.txt', 'Hello world');
    return JSON.parse(rawData);
  }
}
