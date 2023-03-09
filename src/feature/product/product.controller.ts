import { Controller, Get, Param } from '@nestjs/common';
import { ProductModel } from './model/product.model';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly prodService: ProductService) {}

  @Get()
  getAllProducts(): Promise<ProductModel[]> {
    return this.prodService.getAllProducts();
  }

  @Get('/:id')
  getProductById(@Param('id') id: number): Promise<ProductModel> {
    return this.prodService.getProductById(id);
  }
}
