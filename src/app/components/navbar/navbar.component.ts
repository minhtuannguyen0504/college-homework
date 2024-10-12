import { Component, Input } from '@angular/core';
import { DataStorageService } from '../../services/data-storage.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private dataStorage:DataStorageService){}
  
  @Input() cartCount:number=0;
  ngOnInit(): void {
    // var getVal = this.dataStorage.getCartData();
    // this.cartCount = getVal ? getVal.length : 0;
  }

}
