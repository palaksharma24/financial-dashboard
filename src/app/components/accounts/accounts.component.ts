import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Account } from 'src/app/shared/models/account.model';

@Component({
  selector: 'app-accounts',
  imports: [CommonModule, MatIconModule, MatTableModule, MatButtonModule],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {

  dataSource = new MatTableDataSource<Account>();
  displayedColumns: string[] = ['bank', 'balance'];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getAccounts().subscribe({
      next: accounts => {
        this.dataSource.data = accounts;
      },
      error: error => console.error('Error is ', error)
    });
  }
}
