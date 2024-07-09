import { Injectable } from '@angular/core';
import { Product } from './product.service';
import {Subject, Observable,BehaviorSubject } from 'rxjs';

export interface CartItem {
  product: Product;  // Use the Product interface here
  id: number;
  quantity: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private stateSubject = new BehaviorSubject<string>('initial state');
  state$ = this.stateSubject.asObservable();

  removeFromCart: any;
  constructor() { }
   
  private cart: any[] = [];
  BehaviorSubject(){
   
  }

  getState() {
    return this.stateSubject.value;
  }
  setState(newState: string) {
    this.stateSubject.next(newState);
     }
    //  getCart(): Product[] {
    //   return this.cart;
    // }
  addToCart(product: any): void {
    this.cart.push(product);
  }
  // addToCart(product: any) {
  //   let item = this.cart.find(i => i.product.id === product.id);
  //   if (item) {
  //     item.quantity++;
  //   } else {
  //     this.cart.push({ product: product, quantity: 1 });
  //   }
  // }
  getCartItems(): any[] {
    return this.cart;
  }
 
  removeallCart(): void {
    this.cart = [];
  }
 
  removeItemFromCart(index: number): void {
    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }
}



