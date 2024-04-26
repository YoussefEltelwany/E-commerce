import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { CartsService } from '../../service/carts.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartProuduct :any[]= [];
  total :any = 0;
  success :boolean = false;

  constructor(private service:CartsService){}

ngOnInit(): void {
  this.getcartProduct();
}

  getcartProduct(){
    if("cart" in localStorage){
      this.cartProuduct = JSON.parse(localStorage.getItem("cart")!);
  }
  this.GetCartTotal();
}
 
GetCartTotal(){
  this.total = 0;
  for(let i in this.cartProuduct){
    this.total += this.cartProuduct[i].item.price * this.cartProuduct[i].quantity;
  }
}


addAmount(index :number){
  this.cartProuduct[index].quantity++;
  this.GetCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
  
}
minusAmount(index :number){
  this.cartProuduct[index].quantity--;
  this.GetCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProuduct));

}
DeletProduct(index:number){
  this.cartProuduct.splice(index ,1);
  this.GetCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
}

ClearCart(){
  this.cartProuduct=[];
  this.GetCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
}


addCart(){
  let products = this.cartProuduct.map(item =>{
    return {productId:item.item.id , quantity:item.quantity}
  })
  let module ={
    userId:5,
    date: new Date(),
    products:products
  }
  this.service.CreateNewCart(module).subscribe(res =>{
    this.success=true
  })
  this.cartProuduct=[];
  this.GetCartTotal();
  localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
}

}
