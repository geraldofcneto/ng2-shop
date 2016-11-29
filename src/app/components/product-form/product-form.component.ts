import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';

@Component({
    selector: 'product-form',
    templateUrl: './product-form.component.html'
})
export class ProductFormComponent implements OnInit {
    constructor(private _productService: ProductService) { }

    ngOnInit() { }

    saveProduct(title: string, description: string, price: number): Product {
        return this._productService.saveProduct(title, description, price);
    }
}