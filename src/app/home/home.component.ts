import { Component, effect, inject, OnInit, } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CurrencyPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  readonly products = (inject(ProductsService).fetchProducts());

  constructor() {
    effect(() => {
      console.log('products', this.products());
    });
  }

  ngOnInit(): void {
    console.log('products', this.products());
  }
}
