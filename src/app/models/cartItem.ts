import { Product } from './product';
export class CartItem {

    public get product(): Product {
        return this._product;
    }

    public set product(value: Product) {
        this._product = value;
    }

    public get quantity(): number {
        return this._quantity;
    }

    public set quantity(value: number) {
        this._quantity = value;
    }

    private _product: Product;
    private _quantity: number;

    constructor(product: Product, quantity: number) {
        this._product = product;
        this._quantity = quantity;
    }
}