import { Product } from '../../models/product';
import { Cart } from '../../models/cart';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CartService {

    public itemAdded$: EventEmitter<any>;

    addProduct(product: Product) {
        this.getCart().add(product);
        this.setCart(this.cart);
        this.itemAdded$.emit(product);
    }

    getCart(): Cart {
        let storage: string = localStorage.getItem(this.CartTable).replace(/_/g,"");

        if (!storage) {
            return new Cart();
        }

        let c :Cart = new Cart();
        let j: any = JSON.parse(storage);
        c.items = j.items;
        c.user = j.user;
        return c;
    }

    private setCart(cart: Cart) {
        localStorage.setItem(this.CartTable, JSON.stringify(cart));
    }

    cart: Cart;

    CartTable: string = "cart";

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }
}