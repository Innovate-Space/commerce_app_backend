import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CartService } from './cart.service';
import { Product, User } from '@prisma/client';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addProductToCart(@Req() user: User, @Body() product: Product) {
    this.cartService.addNewProductToCart(product, user, 5);
  }

  @Get('user/:id')
  getUsersCart(@Param('id') id: number) {
    return this.cartService.getUserCart(id);
  }
}
