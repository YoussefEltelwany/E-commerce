import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ProductsService } from '../../service/products.service';
import { SharedModule } from "../../../shared/shared.module";

@Component({
    selector: 'app-product-details',
    standalone: true,
    templateUrl: './product-details.component.html',
    styleUrl: './product-details.component.css',
    imports: [
        CommonModule,
        RouterLink,
        RouterModule,
        RouterOutlet,
        SharedModule
    ]
})
export class ProductDetailsComponent {
   id : any
   data : any ={};
   loding :boolean =false;

  constructor(private route:ActivatedRoute ,private service:ProductsService){
    this.id = this.route.snapshot.params['id'];
    
  }

  ngOnInit(): void {
    this.getProduct();
    
  }


  getProduct(){
    this.loding =true
    this.service.GetproductsByid(this.id).subscribe(res=>{
      this.loding =false
      this.data = res;
    })
  }

  }


