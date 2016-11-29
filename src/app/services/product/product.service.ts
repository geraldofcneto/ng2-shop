import { Injectable, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product';

@Injectable()
export class ProductService {

    saveProduct(title: string, description: string, price: number): Product {
        let p: Product = new Product(this.getNewId(), title, description, price);
        let list: Product[] = this.getProductList();
        list.push(p);
        this.setProductList(list);
        this.itemAdded$.emit(p);
        return p;
    }

    listProducts(): Product[] {
        return this.getProductList();
    }

    forId(id: string): Product {
        let p: Product;
        this.listProducts().forEach(element => {
            if (element.id.toString() == id) {
                p = element;
            }
        });
        return p;
    }

    private getProductList(): Product[] {
        let produtos_storage: string = localStorage.getItem(this.ProdutosTable) || "[]";
        let produtos = JSON.parse(produtos_storage);
        let p: Product[] = new Array<Product>();
        for (let entry of produtos) {
            p.push(new Product(entry._id, entry._title, entry._description, entry._price));
        }
        return p;
    }

    private setProductList(list: Product[]) {
        localStorage.setItem(this.ProdutosTable, JSON.stringify(list));
    }

    private getNewId(): number {
        let newId = parseInt(localStorage.getItem(this.NewId)) || 1;
        localStorage.setItem(this.NewId, (newId + 1).toString());
        return newId;
    }


    ProdutosTable: string = "products";
    NewId: string = "newId";

    public itemAdded$: EventEmitter<any>;

    constructor() {
        this.itemAdded$ = new EventEmitter();
    }

}