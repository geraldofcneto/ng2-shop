import { CartService } from '../../services/cart/cart.service';
import { CartItem } from '../../models/cartItem';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cart-item-list',
    templateUrl: './cart-item-list.component.html'
})
export class CartItemListComponent implements OnInit {

    constructor(private cartService: CartService) {
        this.cartItems = cartService.getCart().items;
        cartService.itemAdded$.subscribe((c: CartItem) =>
            this.onItemAdded(c));
    }

    ngOnInit() { }

    onItemAdded(c: CartItem) {
        this.cartItems.push(c);
    }

    cartItems: CartItem[] = [];
}