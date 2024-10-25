import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

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
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}
