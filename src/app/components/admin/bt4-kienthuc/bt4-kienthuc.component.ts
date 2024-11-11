import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bt4-kienthuc',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './bt4-kienthuc.component.html',
  styleUrl: './bt4-kienthuc.component.scss'
})
export class Bt4KienthucComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
}
