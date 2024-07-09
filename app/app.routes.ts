import { Routes } from '@angular/router';

import {PageNotFoundComponent  } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { ShoppingCartComponent } from './features/shopping-cart/shopping-cart.component';
import { CheckoutFormComponent } from './features/ckeckout-form/ckeckout-form.component';
import {  ThanyouComponent } from './features/thanyou/thanyou.component';




export const routes: Routes = [
  
    {path:'home', component:HomeComponent},
    {path:'product-list', component:ProductListComponent},
    {path:'product-details/:id', component:ProductDetailsComponent},
    {path:'shopping-cart', component:ShoppingCartComponent},
    {path:'shopping-cart/checkout-form', component:CheckoutFormComponent},
    {path:'thankyou', component:ThanyouComponent},
    {path:'**', component:PageNotFoundComponent},
   
    
];
