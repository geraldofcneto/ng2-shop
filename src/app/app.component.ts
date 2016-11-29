import { ProductService } from './services/product/product.service';
import { CartService } from './services/cart/cart.service';
import { Component } from '@angular/core';
import { WeatherService } from './services/weather/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, CartService, WeatherService]
})
export class AppComponent {
  title = 'app works!';
}
