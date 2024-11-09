import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountCountDown',
  standalone: true
})

export class DiscountCountDownPipe implements PipeTransform {

  transform(endDate: string | Date): string {
    const dateEnd = new Date(endDate).getTime();
    const now = new Date().getTime();
    const timeLeft = dateEnd - now;

    if (timeLeft < 0) return "Discount is expired!";  

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}
