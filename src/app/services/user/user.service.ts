import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

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

  getUsers(): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const response = this.http.get<any>(this.apiUrl, { headers }).pipe(catchError(this.handleError));   
    return response;
  }

  getUser(id: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const url = `${this.apiUrl}/${Number(id)}`;
    const response = this.http.get<any>(url, { headers }).pipe(catchError(this.handleError)); 
    return response;
  }

  updateUser(id: number, payload: any): any  {
    const headers = new HttpHeaders({ 'Content-type': 'application/json' });
    const url = `${this.apiUrl}/${Number(id)}`
    const response = this.http.put(url, payload, { headers }).toPromise();
    return response;
    
  }

  deleteUser(id: number): void {
    const url = `${this.apiUrl}/${Number(id)}`;
    try {
      this.http.delete(url).toPromise();
    } catch (error) {
      catchError(this.handleError);
      console.log(error);
    } 
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
