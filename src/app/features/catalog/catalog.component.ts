import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  protected productService = inject(ProductService);

  ngOnInit() {
    this.productService.loadProducts();
  }

  updateSearch(event: Event) {
    const term = (event.target as HTMLInputElement).value;
    this.productService.filter.update((f) => ({ ...f, search: term }));
  }
}
