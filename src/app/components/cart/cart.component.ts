import { Component, OnInit } from '@angular/core';
import { Cart } from '../../models/cart';

@Component({
    selector: 'cart',
    templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    cart: Cart = new Cart();
}