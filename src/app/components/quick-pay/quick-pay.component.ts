import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-quick-pay',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './quick-pay.component.html',
  styleUrl: './quick-pay.component.scss'
})
export class QuickPayComponent {
  quickPayForm: FormGroup;
  selectedTab: 'quickPay' | 'transfers' = 'quickPay';
  suppliers = [
    { value: 'supplier1', label: 'Supplier 1' },
    { value: 'supplier2', label: 'Supplier 2' },
    { value: 'supplier3', label: 'Supplier 3' }
  ];
  paymentMethods = [
    { value: 'ach', label: 'ACH Transfer' },
    { value: 'wire', label: 'Wire Transfer' },
    { value: 'interact', label: 'Interact transfer' }
  ];

  constructor(private fb: FormBuilder) {
    this.quickPayForm = this.fb.group({
      supplier: ['', Validators.required],
      amount: ['', [Validators.required]],
      paymentMethod: ['', Validators.required],
      remittanceNotes: ['']
    });
  }

  onQuickPaySubmit(): void {
    if (this.quickPayForm.valid) {
      console.log('Quick Pay Form Submitted:', this.quickPayForm.value);
    }
  }
}
