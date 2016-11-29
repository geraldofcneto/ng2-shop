import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService, private _cartService: CartService) {
        _productService.itemAdded$.subscribe((item: any) => this.onItemAdded(item));

    }

    ngOnInit() {
        this.products = this._productService.listProducts();
    }

    shop(p: Product) {
        this._cartService.addProduct(p);
    }

    onItemAdded(p: Product) {
        this.products.push(p);
    }

    products: Product[] = [];
}