import { Component } from '@angular/core';
import { CurrencyFormatterPipe } from './currency-formatter.pipe';

@Component({
  selector: 'app-custom-pipe',
  standalone: true,
  imports: [CurrencyFormatterPipe],
  template: `
    <p>{{ 12345.6789 | currencyFormatter:'€':3 }}</p>
    <p>{{ 12345.6789 | currencyFormatter:'$' }}</p>
  `,
  styleUrl: './custom-pipe.component.scss'
})
export class CustomPipeComponent {

}
