import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { SpinerComponent } from './components/spiner/spiner.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    SpinerComponent,
    RouterLink,
    RouterModule,
    RouterOutlet,
    FormsModule,
   
  ],
  exports:[
    HeaderComponent,
    SpinerComponent,
    FormsModule
  ]
})
export class SharedModule { }
