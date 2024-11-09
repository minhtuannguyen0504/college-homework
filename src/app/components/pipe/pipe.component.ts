import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [DatePipe],
  template: `
    <p>Today is {{ today | date }} </p>
    <p>Today is {{ today | date:'fullDate' }} </p>
    <p>Today is {{ today | date:'h:mm a z' }} </p>
    `,
  styleUrl: './pipe.component.scss'
})
export class PipeComponent {
  today: number = Date.now();
}
