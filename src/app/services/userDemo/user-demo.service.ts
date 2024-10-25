import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDemoService {
  private apiUrl: string = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) {}

  getList(): Observable<Object> {
    return this.http
      .get(this.apiUrl)
      .pipe(
        catchError((error: {message: string}) => {
          return error.message;
        })
      )
    ;
  }

  search(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${name}`);
  }
}
