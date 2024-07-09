import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { CommonModule } from '@angular/common';
import { CheckoutFormComponent } from '../../features/ckeckout-form/ckeckout-form.component';
import { ShoppingCartComponent } from '../../features/shopping-cart/shopping-cart.component';
import { ProductDetailsComponent } from '../../features/product-details/product-details.component';
import { ProductListComponent } from '../../features/product-list/product-list.component';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule,CheckoutFormComponent,ShoppingCartComponent,ProductDetailsComponent,ProductListComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private router: Router){}
  onSubmit(){
    console.log("Search button clicked");
  }
}
