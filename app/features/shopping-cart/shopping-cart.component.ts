import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import{Product, ProductService} from '../../services/product.service'
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CheckoutFormComponent } from '../ckeckout-form/ckeckout-form.component';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,CheckoutFormComponent],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {
  currentState: any;
  stateSubscription:any;
  // isCheckoutDisabled: boolean = true;
  constructor(private router: Router, private cartService: CartService, private productService: ProductService) {}
    cart: Product[] = []; 

    ngOnInit() {
      this.currentState = this.cartService.getState();
      console.log(this.currentState)
    

      this.cart.push(this.currentState); 
      
    }

    products: Product[] = [
      { id: 1, name: 'Electronic Appliances', price:20000, description: '', imageUrl: '' },
      { id: 2, name: 'Watches', price: 1999, description: '', imageUrl: '' },
      { id: 3, name: 'Laptop', price: 2499, description: '', imageUrl: '' }
    ];
  
    addToCart(product: Product): void {
      this.cart.push(product); 
      
    }
  
    removeFromCart(index: number): void {
      if (index >= 0 && index < this.cart.length) {
        this.cart.splice(index, 1); 
      }
    }
  
    getTotalPrice(): number {
      return this.cart.reduce((acc, product) => acc + product.price, 0); // Calculate total price of products in cart
    }

    incrementQuantity(index: number) {
      this.cart[index]['quantity']++;
    }
  
    decrementQuantity(index: number) {
  
      if (this.cart[index]['quantity'] > 1) {
        this.cart[index]['quantity']--;
      }
    // onCheckout(): void {
    //   this.router.navigate(['/checkout-form']);
    // }
}}
