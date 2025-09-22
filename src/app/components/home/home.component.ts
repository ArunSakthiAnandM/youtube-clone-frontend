import { Component } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  imports: [SideBarComponent, MatSidenavModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
