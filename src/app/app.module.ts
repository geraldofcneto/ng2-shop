import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.components';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { CartItemListComponent } from './components/cart-item-list/cart-item-list.component';
import { WeatherComponent } from './components/weather/weather.component';


import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent, CartComponent, ProductListComponent, HomeComponent, ProductFormComponent, CartItemListComponent, WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductListComponent },
      { path: 'cart', component: CartComponent },
      { path: 'create', component: ProductFormComponent, canActivate: [AuthGuard] },
      { path: 'cartList', component: CartItemListComponent },
      { path: 'weather', component: WeatherComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


