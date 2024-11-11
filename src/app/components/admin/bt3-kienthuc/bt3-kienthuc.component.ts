import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-bt3-kienthuc',
  standalone: true,
  imports: [HeaderComponent,ContentComponent,FooterComponent],
  templateUrl: './bt3-kienthuc.component.html',
  styleUrl: './bt3-kienthuc.component.scss'
})
export class Bt3KienthucComponent {

}
