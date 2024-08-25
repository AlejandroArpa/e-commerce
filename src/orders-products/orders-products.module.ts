import { Module } from '@nestjs/common';
import { OrdersProductsService } from './orders-products.service';


@Module({
  providers: [OrdersProductsService],
})
export class OrdersProductsModule {}
