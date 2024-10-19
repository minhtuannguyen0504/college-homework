import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { DiscountCountDownPipe } from './discount-count-down.pipe';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-discount-count-down',
  standalone: true,
  imports: [DiscountCountDownPipe],
  templateUrl: './discount-count-down.component.html',
  styleUrl: './discount-count-down.component.scss'
})
export class DiscountCountDownComponent implements OnInit, OnDestroy {
  endDate = new Date('2024-10-15T06:42:00'); 
  timeLeft: string = ''; 
  private intervalId : any; 

  constructor(private cdr: ChangeDetectorRef, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    isPlatformBrowser(this.platformId) && this.startCountDown();
  }

  startCountDown () {
      this.intervalId = setInterval(() => {   
        const timeLeftInstance = new DiscountCountDownPipe().transform(this.endDate);
        if (this.timeLeft === "Discount is expired!") {
          this.timeLeft = timeLeftInstance;
          this.ngOnDestroy();
        } else {
          this.timeLeft = timeLeftInstance;
        }
        this.cdr.detectChanges();
      }, 1000);
  }

  ngOnDestroy() {
    this.intervalId && clearInterval(this.intervalId);
  }
}
