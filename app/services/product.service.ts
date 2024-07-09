import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';

export interface Product {
  [x: string]: any;
  // quantity: number;
  id: number;
  name: string;
  price: number;
  description:string;
  imageUrl:string;
  // navigate:string;
  
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Electronic Appliances', price: 4999, 
      description: '"Discover cutting-edge electronic appliances for every need and budget."', imageUrl: '/assets/images/ea.jpeg' },
    { id: 2, name: 'Watches', price: 1999, 
      description: '"Timeless elegance at your fingertips – explore our exquisite collection of watches."', imageUrl: '/assets/images/watches1.jpeg' },
    { id: 3, name: 'Laptop ', price: 24999, 
      description: '"Explore top-tier laptops at unbeatable prices in our online store today!"', imageUrl: '/assets/images/laptop3.jpg' },
    { id: 4, name: 'Electronic Appliances', price: 4999,
       description: '"Discover cutting-edge electronic appliances for every need and budget."', imageUrl: '/assets/images/ea1.jpeg' },
    { id: 5, name: 'Watches ', price: 1999, 
      description: '"Timeless elegance at your fingertips – explore our exquisite collection of watches."', imageUrl: '/assets/images/watches3.jpeg' },
    { id: 6, name: 'Laptop ', price: 24999, 
      description: '"Explore top-tier laptops at unbeatable prices in our online store today!"', imageUrl: '/assets/images/laptop2.jpg' },
    { id: 7, name: 'Electronic Appliances', price: 4999,
       description: '"Discover cutting-edge electronic appliances for every need and budget."', imageUrl: '/assets/images/ea2.jpeg' },
    { id: 8, name: 'Watches ', price: 1999, 
      description: '"Timeless elegance at your fingertips – explore our exquisite collection of watches."', imageUrl: '/assets/images/watches.jpeg' },
    { id: 9, name: 'Laptop ', price: 24999,
       description: '"Explore top-tier laptops at unbeatable prices in our online store today!"', imageUrl: '/assets/images/laptop1.jpg' }
  ];

  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.products.find(p => p.id === id);
    return of(product);
  }

  
}
