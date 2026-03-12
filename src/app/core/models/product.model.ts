export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  inventoryStatus: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
}

export interface ProductFilter {
  search: string;
  category: string;
  sortBy: 'price-asc' | 'price-desc' | 'name';
}
