import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    { path: 'weather', component: WeatherComponent },
    {path: "users", component: UserComponent}, 
    {path: "", redirectTo: "/users", pathMatch: "full"}
];
