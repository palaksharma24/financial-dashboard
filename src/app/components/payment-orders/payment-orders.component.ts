import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { DashboardService } from '../../services/dashboard.service';
import { PaymentOrder } from '../../shared/models/payment-order.model';

@Component({
  selector: 'app-payment-orders',
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  templateUrl: './payment-orders.component.html',
  styleUrl: './payment-orders.component.scss'
})
export class PaymentOrdersComponent {
  dataSource = new MatTableDataSource<PaymentOrder>();
  displayedColumns: string[] = ['orderNumber', 'processingDate', 'status', 'amount'];
  orderLength: number = 0;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getPaymentOrders().subscribe({
      next: orders => {
        this.dataSource.data = orders;
        this.orderLength = orders.length;
      },
      error: error => console.error('Error is ', error)
    });
  }

}