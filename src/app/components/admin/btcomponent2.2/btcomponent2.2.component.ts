import { Component } from '@angular/core';
import { Parent1Component } from "./parent1/parent1.component";

@Component({
  selector: 'app-btcomponent2.2',
  standalone: true,
  imports: [Parent1Component],
  templateUrl: './btcomponent2.2.component.html',
  styleUrl: './btcomponent2.2.component.scss'
})
export class Btcomponent22Component {

}
