import { ProductService } from '../services/product/product.service';
import { Product } from './product';
import { User } from './user';
import { CartItem } from './cartItem';

export class Cart {

    public add(product: Product) {
        let c: CartItem;
        for (let i = 0; i < this._items.length; i++) {
            let p = this._items[i];
            if (p.product.id == product.id) {
                p.quantity = p.quantity + 1;
                c = p;
            }
        }
        if (!c) {
            this._items.push(new CartItem(product, 1));
        }
    }

    public get user(): User {
        return this._user;
    }

    public set user(value: User) {
        this._user = value;
    }

    public get items(): CartItem[] {
        return this._items;
    }

    public set items(value: CartItem[]) {
        this._items = value;
    }

    private _user: User;
    private _items: CartItem[] = [];

    constructor() { }
}