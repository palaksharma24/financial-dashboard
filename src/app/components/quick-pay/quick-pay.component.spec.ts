import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPayComponent } from './quick-pay.component';

describe('QuickPayComponent', () => {
  let component: QuickPayComponent;
  let fixture: ComponentFixture<QuickPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickPayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
