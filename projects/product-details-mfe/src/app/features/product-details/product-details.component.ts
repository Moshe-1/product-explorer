import {Component, inject, Input, computed, signal, OnInit} from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { FavoritesService } from '../../core/services/favorites.service';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../core/models/product.model';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit{
  private productService = inject(ProductService);
  protected fav = inject(FavoritesService);
  private productId = signal<string>('');
  // Router passes 'id'  withComponentInputBinding  configured in app config
  @Input() set id(value: string) {
    this.productId.set(value);
  } 

  product = computed(() =>
    this.productService.filteredProducts().find((p: Product) => p.id === this.productId()),
  );

  ngOnInit() {
    this.productService.loadProducts();
  }
}
