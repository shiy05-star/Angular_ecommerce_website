import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})



export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cart: any;
  constructor(private router: Router, private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any): void {
    // this.cart.push(product);
    console.log("hello",product);
    this.cartService.setState(product);
    this.router.navigate(['/shopping-cart']);
  }
  navigateToDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }
}