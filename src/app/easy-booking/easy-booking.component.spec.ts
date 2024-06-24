import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyBookingComponent } from './easy-booking.component';

describe('EasyBookingComponent', () => {
  let component: EasyBookingComponent;
  let fixture: ComponentFixture<EasyBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EasyBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EasyBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
