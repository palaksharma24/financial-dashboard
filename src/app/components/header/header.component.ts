import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, CommonModule, MatSidenavModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isDrawerOpened: boolean = true;
  isDesktop: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe('(max-width: 768px)')
      .subscribe(result => {
        this.isDesktop = !result.matches;
        this.isDrawerOpened = !result.matches;
      });
  }

  toggleDrawer(): void {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

}
