import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private readonly STORAGE_KEY = 'product_favorites';

  ids = signal<string[]>(this.loadFromStorage());

  constructor() {
    // Reactive side-effect: Sync to storage whenever the signal changes
    effect(() => {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.ids()));
    });
  }

  private loadFromStorage(): string[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  toggleFavorite(productId: string) {
    this.ids.update((current: string[]) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    );
  }
}
