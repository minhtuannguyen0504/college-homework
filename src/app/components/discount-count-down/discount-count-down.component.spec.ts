import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCountDownComponent } from './discount-count-down.component';

describe('DiscountCountDownComponent', () => {
  let component: DiscountCountDownComponent;
  let fixture: ComponentFixture<DiscountCountDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountCountDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountCountDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
