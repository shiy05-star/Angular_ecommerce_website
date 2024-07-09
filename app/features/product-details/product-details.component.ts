import { Component, OnInit } from '@angular/core';
import { ProductService,} from '../../services/product.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import{Product} from  '../../services/product.service'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  cart: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
    // private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    const productId = idString ? parseInt(idString, 10) : 0;

    if (productId !== 0) {
      this.productService.getProductById(productId).subscribe(
        (product: Product | undefined) => {
          if (product) {
            this.product = product;
          } else {
            console.error(`Product with ID ${productId} not found.`);
          }
        },
        (error) => {
          console.error('Error fetching product:', error);
        }
      );
    } else {
      console.error('Product ID not found in route parameters.');
    }
  }

  addToCart(product: Product): void {
    console.log('Adding to cart:', product);
    // this.cartService.addToCart(product);

    // Navigate to shopping cart page
    this.router.navigate(['/shopping-cart']);
  }
  backToProducts(){
    this.router.navigate(['/product-list']);
  }
}