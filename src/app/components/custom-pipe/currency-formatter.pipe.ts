import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatter',
  standalone: true
})
export class CurrencyFormatterPipe implements PipeTransform {

  transform(value: number, symbol: string = '$', decimalLength: number = 2): string {
    if (!value) 
      return '';

    const formattedValue = value
      .toFixed(decimalLength)
      .replace(/\d(?=(\d{3})+\.)/g, '$&,');

    return `${symbol} ${formattedValue}`;
  }

}
