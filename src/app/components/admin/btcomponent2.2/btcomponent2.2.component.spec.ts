import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Btcomponent22Component } from './btcomponent2.2.component';

describe('Btcomponent22Component', () => {
  let component: Btcomponent22Component;
  let fixture: ComponentFixture<Btcomponent22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Btcomponent22Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Btcomponent22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
