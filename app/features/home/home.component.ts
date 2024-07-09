import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  constructor(private router: Router) {} // Inject Router into the component

  onShop() {
    this.router.navigate(['/product-list']); // Navigate to '/product-list' route on button click
  }
}
