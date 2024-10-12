import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {}

