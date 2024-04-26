import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../../shared/components/footer/footer.component";


@Component({
    selector: 'app-product',
    standalone: true,
    templateUrl: './product.component.html',
    styleUrl: './product.component.css',
    imports: [
        CommonModule,
        SharedModule,
        RouterLink,
        RouterModule,
        RouterOutlet,
        FooterComponent
    ]
})
export class ProductComponent {

  @Input() data :any ={};
  @Output() item = new EventEmitter();
  addButton : boolean =false;
  amount :number = 0;

  constructor(){};

  add(){
    this.item.emit({item :this.data , quantity:this.amount});
  }

  }


