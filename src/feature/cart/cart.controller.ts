import { Controller, Get, Param } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get('user/:id')
  getUsersCart(@Param('id') id: number) {
    return this.cartService.getUserCart(id);
  }
}
