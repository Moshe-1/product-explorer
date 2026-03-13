import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { Product } from '../models/product.model';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductService, provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load products and update signals', (done) => {
    const mockProducts: Product[] = [
      {
        id: '1',
        name: 'The Psychology of Money',
        description: 'Timeless lessons on wealth, greed, and happiness.',
        price: 45.99,
        category: 'Finance',
        imageUrl: 'assets/images/book1.jpg',
        inventoryStatus: 'INSTOCK',
      },
    ];

    service.loadProducts();

    // Verify the HTTP request
    const req = httpMock.expectOne('assets/data/products.json');
    expect(req.request.method).toBe('GET');

    // Flush the mock data
    req.flush(mockProducts);

    // Because of the 'delay(1000)' in your service, we need to wait
    setTimeout(() => {
      expect(service.products()).toEqual(mockProducts);
      expect(service.isLoading()).toBe(false);
      done();
    }, 1100);
  });
});
