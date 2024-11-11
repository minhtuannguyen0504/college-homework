import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt4KienthucComponent } from './bt4-kienthuc.component';

describe('Bt4KienthucComponent', () => {
  let component: Bt4KienthucComponent;
  let fixture: ComponentFixture<Bt4KienthucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bt4KienthucComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt4KienthucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
