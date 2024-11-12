import { Routes } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { UserComponent } from './components/user/user.component';
import { CalculatorComponent } from './components/calculator/calculator.component';

export const routes: Routes = [
    { path: "", redirectTo: "/users", pathMatch: "full" },
    { path: 'weather', component: WeatherComponent },
    { path: "users", component: UserComponent }, 
    { path: "calc", component: CalculatorComponent },
];
