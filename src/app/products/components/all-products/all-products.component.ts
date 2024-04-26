import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { SharedModule } from "../../../shared/shared.module";
import { ProductComponent } from "../product/product.component";
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";


@Component({
    selector: 'app-all-products',
    standalone: true,
    templateUrl: './all-products.component.html',
    styleUrl: './all-products.component.css',
    imports: [
        CommonModule,
        SharedModule,
        ProductComponent,
        RouterLink,
        RouterModule,
        RouterOutlet,
        FooterComponent
    ]
})
export class AllProductsComponent {

  products:any[]=[]; 
  categories:any[]=[];
  loding :boolean =false;
  cartProuduct :any[]=[];

      constructor(public service:ProductsService){}
      
      ngOnInit(): void {
        this.getProducts();
        this.getcategories();

      }

      getProducts(){
        this.loding =true
        this.service.getAllProducts().subscribe(res =>{
          this.products=res;
          this.loding =false
        })
        
       
      }
      getcategories(){
        this.loding =true
        this.service.Getallcategories().subscribe(resalt =>{
          this.categories=resalt;
          this.loding =false;
          
        })
      }

      filterCategorie(event:any) { 
        let value = event.target.value;
        if(value == "all"){
            this.getProducts();
        }else{
          this.GetproductsCategorie(value);
        }
      }
      GetproductsCategorie(keyword: string){
        this.loding =true
        this.service.GetproductsBycategories(keyword).subscribe((res:any) =>{
          this.products=res;
          this.loding =false;
        })
      }


      addtoCart(event:any) {
        if("cart" in localStorage){
          this.cartProuduct = JSON.parse(localStorage.getItem("cart")!);
          let exit = this.cartProuduct.find(item => item.item.id == event.item.id)
          if(exit){
            alert ('the item is alredy in your cart')
          }else{
            this.cartProuduct.push(event);
          localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
          }
        }else{
          this.cartProuduct.push(event);
          localStorage.setItem("cart",JSON.stringify(this.cartProuduct));
          
        }
        

      }
}
