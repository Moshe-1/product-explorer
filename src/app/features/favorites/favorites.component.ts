import { Component, inject, computed } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { FavoritesService } from '../../core/services/favorites.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Product } from '../../core/models/product.model';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent {
  protected productService = inject(ProductService);
  protected fav = inject(FavoritesService);

  favoriteProducts = computed(() => {
    const favIds = this.fav.ids();
    return this.productService.products().filter((p: Product) => favIds.includes(p.id));
  });
}
