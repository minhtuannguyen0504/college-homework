import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  createUser(payload: any): any {
    const headers = new HttpHeaders({'Content-type': 'application/json'});
    const url = `${this.apiUrl}`;
    try {
      return this.http.post<any>(url, payload, { headers }).toPromise();
    } catch (error) {
      catchError(this.handleError);
      console.log(error);
    }
  }

  getProducts(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const response = this.http.get<any>(this.apiUrl, { headers }).pipe(catchError(this.handleError));   
    return response;
  }

  getProduct(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const url = `${this.apiUrl}/${Number(id)}`;
    const response = this.http.get<any>(url, { headers }).pipe(catchError(this.handleError)); 
    return response;
  }
  private handleError(error: HttpErrorResponse)  {
    let message = '';

    if (error.error instanceof ErrorEvent) {
      message = `Client-side error: ${error.error.message}`;
    } else {
      message = `Server-side error: ${error.status} - ${error.message}`;
    }

    console.error(message);
    return throwError(message);
  }
}
