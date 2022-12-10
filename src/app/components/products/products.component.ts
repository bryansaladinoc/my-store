import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  myShoppingCart: Product[] = [];
  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 100
    },
    {
      id: '2',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 200
    },
    {
      id: '3',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 580
    },
    {
      id: '4',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 450
    },
    {
      id: '5',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 50
    },
    {
      id: '6',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 1000
    }
  ];

  constructor(
    private storeService: StoreService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
  }

  onAdToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
