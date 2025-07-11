import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DashboardStatsComponent } from '../dashboard-stats/dashboard-stats.component';
import { MatButtonModule } from '@angular/material/button';
import { AccountsComponent } from '../accounts/accounts.component';
import { QuickPayComponent } from '../quick-pay/quick-pay.component';
import { PaymentOrdersComponent } from '../payment-orders/payment-orders.component';


@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, DashboardStatsComponent, MatButtonModule, AccountsComponent, QuickPayComponent, PaymentOrdersComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  companyName: string = 'N and F solutions';
}
