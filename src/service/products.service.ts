import { inject, Injectable, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly http = inject(HttpClient)
  readonly apiUrl = 'https://fakestoreapi.com';

  fetchProducts(): Signal<any> {
    return toSignal(this.http.get<any>(`${this.apiUrl}/products`), { initialValue: [] });
  }

}
