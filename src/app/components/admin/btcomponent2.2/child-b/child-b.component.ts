import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  standalone: true
})
export class ChildBComponent {
  @Input() data!: string;
}
