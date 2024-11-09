import { Component, OnInit } from '@angular/core';
import { AdminMenu } from '../../config/admin-menu';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [NavbarComponent,CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {

  menuItems = AdminMenu;
  ngOnInit(): void {
      console.log(this.menuItems);
      
  }
}