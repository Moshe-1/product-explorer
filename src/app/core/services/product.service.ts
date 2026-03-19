import { Injectable, signal, computed, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, ProductFilter } from '../models/product.model';
import { delay, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  constructor() {
    this.loadProducts();
  }
  // State Signals
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);

  filter = signal<ProductFilter>({ search: '', category: '', sortBy: 'name' });

  filteredProducts = computed(() => {
    const term = this.filter().search.toLowerCase();
    return this.products()
      .filter(
        (p: Product) =>
          p.name.toLowerCase().includes(term) || p.price.toString().toLowerCase().includes(term),
      )
      .sort((a: Product, b: Product) => a.name.localeCompare(b.name));
  });

  loadProducts() {
    this.isLoading.set(true);
    this.http
      .get<Product[]>('assets/data/products.json')
      .pipe(
        delay(1000),
        tap((data: Product[]) => {
          this.products.set(data);
          this.isLoading.set(false);
        }),
        catchError(() => {
          this.error.set('Failed to load products');
          this.isLoading.set(false);
          return of([]);
        }),
      )
      .subscribe();
  }
}
