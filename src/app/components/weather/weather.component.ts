import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { WeatherService } from '../../services/weather/weather.service';
import { ICity } from '../../interfaces';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive, CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  cities: ICity[] = [];
  city: any[] = [];

  constructor(private weatherService: WeatherService) {
    this.cities = this.weatherService.getCountries();
  }

  getWeatherOfCity(cityId: number): any {
    this.weatherService.callApi(cityId).subscribe(
      (data: any) => {
        this.city = data.list;
      },
      (error: TypeError) => {
        console.error(error);
      }
    );
  }

  convertTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    const pad = (n: number) => n.toString().padStart(2, '0');

    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(
      date.getSeconds()
    )} ngày
           ${pad(date.getDate())}/${pad(
      date.getMonth() + 1
    )}/${date.getFullYear()}`;
  }
}
