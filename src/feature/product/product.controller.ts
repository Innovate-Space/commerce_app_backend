import { Controller, Get, Param } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {
    constructor(private readonly prodService: ProductService) {}

    @Get()
    getAllProducts(){
        return this.prodService.getAllProducts();
    }

    @Get('/:id')
    getProductById(@Param('id') id: number){
        return this.prodService.getProductById(id);
    }


}