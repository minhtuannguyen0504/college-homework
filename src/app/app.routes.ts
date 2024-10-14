import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PipeComponent } from './components/pipe/pipe.component';

export const routes: Routes = [
      {path: "users", component: UserComponent}, 
      {path: 'pipe', component: PipeComponent}
];
