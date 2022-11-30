import { Component } from '@angular/core';
import { Product } from './models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

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
      price: 100
    },
    {
      id: '3',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 100
    },
    {
      id: '4',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 100
    },
    {
      id: '5',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 100
    },
    {
      id: '6',
      name: 'Product 1',
      image: './assets/images/balon.jpg',
      price: 100
    }
  ];

  onLoaded(img: string) {
    console.log('log padre', img); 1
  }
}
