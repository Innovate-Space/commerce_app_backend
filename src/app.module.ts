import { Module } from '@nestjs/common';
import { ProductModule } from './feature/product/product.module';
import { AuthModule } from './feature/auth/auth.module';
import { CartModule } from './feature/cart/cart.module';
import { UserModule } from './feature/user/user.module';

@Module({
  imports: [ProductModule, AuthModule, CartModule, UserModule],
})
export class AppModule {}
