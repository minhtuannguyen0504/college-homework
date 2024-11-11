import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { IProduct } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    return this.http.get<Product[]>(this.apiUrl, { headers }).pipe(
      catchError(this.handleError)
    );
  }
  // private products: Product[] = [
  //   { id: 1, title: 'Product 1', price: 100,description:"" },
  //   { id: 2, title: 'Product 2', price: 200, description:"" },
  //   { id: 3, title: 'Product 3', price: 300, description:"" },
  // ];

  // constructor(private http: HttpClient) {}

 
  // getProducts(): Observable<Product[]> {
  //   return of(this.products); 
  // }
  GetAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // getProducts() {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }
  getProduct(id: number): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
      message = `Client-side error: ${error.error.message}`;
    } else {
      message = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(message);
    return throwError(message);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  deleteProduct(productId: number): Observable<void> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.delete<void>(url);
  }
  products:IProduct[] = [
    {
      id: 1,
      name: 'MacBook Air 13 inch M1',
      img: 'https://cdn.tgdd.vn/Products/Images/44/231244/macbook-air-m1-2020-gray-600x600.jpg',
    },
    {
      id: 2,
      name: 'MacBook Air 13 inch M2',
      img: 'https://cdn.tgdd.vn/Products/Images/44/282827/apple-macbook-air-m2-2022-xanh-600x600.jpg',
    },
    {
      id: 3,
      name: 'MacBook Air 13 inch M3',
      img: 'https://cdn.tgdd.vn/Products/Images/44/322612/macbook-air-13-inch-m3-2024-050324-020626-600x600.jpg',
    },
    {
      id: 4,
      name: 'MacBook Air 15 inch M2',
      img: 'https://cdn.tgdd.vn/Products/Images/44/309016/apple-macbook-air-15-inch-m2-2023-gray-thumb-600x600.jpg',
    },
];

getList() {
    return this.products;
}

getItemById(id: number) {
    return this.products.find(product => product.id === id);
}
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}
