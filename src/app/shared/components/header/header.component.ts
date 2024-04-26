import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    RouterLink,
    RouterModule,
    RouterOutlet
    

  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  
  
}
