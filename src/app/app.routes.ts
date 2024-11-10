import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { CounterComponent } from './components/counter/counter.component';
import { UserWithNgrxComponent } from './components/user-with-ngrx/user-with-ngrx.component';

export const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'userWithNgRx', component: UserWithNgrxComponent },
];
