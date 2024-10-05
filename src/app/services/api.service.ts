import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&lang=vi&appid=1a6ac2498ac92340c23f30de6c0dae97').pipe(
      catchError(error => {
        console.log(error);
        return throwError(() => new Error('Something went wrong'));
      })
    );
  }
}
