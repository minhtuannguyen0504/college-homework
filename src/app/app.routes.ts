import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
      {path: "users", component: UserComponent}, 
      {path: "", redirectTo: "/users", pathMatch: "full"}
];
