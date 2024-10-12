import { Injectable } from '@angular/core';
import CountriesData from '../../json/city.list.json';
import { ICity } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  cities: ICity[] = CountriesData;
  apiKey: string = '1a6ac2498ac92340c23f30de6c0dae97';

  constructor(private http: HttpClient) {}

  getCountries(): ICity[] {
    return this.cities;
  }

  callApi(cityId: number): Observable<string | Object> {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/group?id=${cityId}&appid=${this.apiKey}&units=metric&lang=vi`
      )
      .pipe(
        catchError((error: { message: string }) => {
          return error.message;
        })
      );
  }
}
