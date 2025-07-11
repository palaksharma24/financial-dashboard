import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DashboardStats } from '../shared/models/dashboard-stats.model';
import { Account } from '../shared/models/account.model';
import { PaymentOrder } from '../shared/models/payment-order.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getDashboardStats(): Observable<DashboardStats> {
    return of({
      pendingApprovalOrders: 0,
      pendingApprovalTransfers: 0,
      attentionRequiredOrders: 8,
      scheduledPaymentsCAD: 69.00,
      scheduledPaymentsUSD: 0.00,
      nextScheduledPaymentDate: "October 30th, 2024",
      completedThisMonthCAD: 0.00,
      completedThisMonthUSD: 0.00
    });
  }

  getAccounts(): Observable<Account[]> {
    return of([
      {
        id: '1',
        type: 'Virtual Wallet (CAD)',
        accountNumber: '2024***************',
        balance: 99999997.00,
        currency: 'CAD',
        lastUpdated: new Date('2025-06-26T12:56:00'),
        icon: 'account_balance_wallet'
      },
      {
        id: '2',
        type: 'Virtual Wallet (USD)',
        accountNumber: '2024***************',
        balance: 0.00,
        currency: 'USD',
        lastUpdated: new Date('2025-06-26T12:56:00'),
        icon: 'account_balance_wallet'
      },
      {
        id: '3',
        type: 'ACH Debit Account',
        accountNumber: '1417*******',
        balance: 367268729.76,
        currency: 'CAD',
        lastUpdated: new Date('2025-06-26T12:56:00'),
        icon: 'account_balance'
      },
      {
        id: '4',
        type: 'Inactive account',
        accountNumber: '1111*******',
        balance: -13034.56,
        currency: 'CAD',
        lastUpdated: new Date('2025-06-26T12:56:00'),
        icon: 'account_balance'
      },
            {
        id: '5',
        type: 'Bank - 1111',
        accountNumber: '1111*******',
        balance: 0,
        currency: 'CAD',
        lastUpdated: new Date('2025-06-26T12:56:00'),
        icon: 'account_balance'
      }

    ]);
  }

  getPaymentOrders(): Observable<PaymentOrder[]> {
    return of([
      {
        id: '1',
        orderNumber: '1053821',
        processingDate: new Date('2024-11-08'),
        status: 'In-progress',
        amount: 1.50,
        currency: 'CAD'
      },
      {
        id: '2',
        orderNumber: '1053820',
        processingDate: new Date('2024-11-08'),
        status: 'In-progress',
        amount: 1.50,
        currency: 'CAD'
      },
      {
        id: '3',
        orderNumber: '1053641',
        processingDate: new Date('2024-10-07'),
        status: 'In-progress',
        amount: 20.50,
        currency: 'CAD'
      },
      {
        id: '4',
        orderNumber: '1053528',
        processingDate: new Date('2024-09-04'),
        status: 'In-progress',
        amount: 1.50,
        currency: 'CAD'
      },
      {
        id: '5',
        orderNumber: '1053527',
        processingDate: new Date('2024-09-03'),
        status: 'In-progress',
        amount: 1.50,
        currency: 'CAD'
      },
      {
        id: '6',
        orderNumber: '1053183',
        processingDate: new Date('2024-06-20'),
        status: 'In-progress',
        amount: 1.50,
        currency: 'CAD'
      }
    ]);
  }
}