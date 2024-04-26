import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductComponent } from './components/product/product.component';








@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AllProductsComponent,
    ProductDetailsComponent,
    ProductComponent,
   
  ],

})
export class ProductsModule { }
