import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOrdersComponent } from './payment-orders.component';

describe('PaymentOrdersComponent', () => {
  let component: PaymentOrdersComponent;
  let fixture: ComponentFixture<PaymentOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentOrdersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
