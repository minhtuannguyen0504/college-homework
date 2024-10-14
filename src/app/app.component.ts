import { Component } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { DiscountCountDownComponent } from './components/discount-count-down/discount-count-down.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent, PipeComponent, CustomPipeComponent, DiscountCountDownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})

export class AppComponent {
}
