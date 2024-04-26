import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SharedModule } from "./shared/shared.module";
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { FooterComponent } from "./shared/components/footer/footer.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        RouterOutlet,
        MatSlideToggleModule,
        SharedModule,
        ProductsModule,
        CartsModule,
        RouterModule,
        FooterComponent
    ]
})
export class AppComponent {
  title = 'e-commerce';
}
