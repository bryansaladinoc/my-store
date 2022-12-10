import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[] = [];
  private total: number = 0;

  constructor() { }

  addProduct(product: Product): void {
    console.log(product);
    console.log('XDS');
    this.myShoppingCart.push(product);
  }

  getShoppingCart(): Product[] {
    return this.myShoppingCart;
  }

  getTotal(): number {
    return this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
