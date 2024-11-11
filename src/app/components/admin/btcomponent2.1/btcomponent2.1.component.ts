import { Component } from '@angular/core';
import { ParentComponent } from './parent/parent.component';

@Component({
  selector: 'app-btcomponent2.1',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './btcomponent2.1.component.html',
  styleUrl: './btcomponent2.1.component.scss'
})
export class Btcomponent21Component {

}
