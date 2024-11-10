import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithNgrxComponent } from './user-with-ngrx.component';

describe('UserWithNgrxComponent', () => {
  let component: UserWithNgrxComponent;
  let fixture: ComponentFixture<UserWithNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWithNgrxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
