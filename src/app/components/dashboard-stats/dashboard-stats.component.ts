import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardStats } from 'src/app/shared/models/dashboard-stats.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard-stats',
  imports: [CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './dashboard-stats.component.html',
  styleUrl: './dashboard-stats.component.scss'
})
export class DashboardStatsComponent {
  stats: DashboardStats = {} as DashboardStats;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.getDashboardStats().subscribe({
      next: stats => {
        this.stats = stats;
      },
      error: error => console.error('Error is ', error)
    });
  }
}
