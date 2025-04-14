import { Component, effect, inject, } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly products = (inject(ProductsService).fetchProducts());

  constructor() {
    effect(() => {
      console.log('products', this.products());
    });
  }
}
