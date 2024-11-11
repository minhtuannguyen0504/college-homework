import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `<p>Received data from parent: {{ data }}</p>`,
})
export class ChildComponent {
  @Input() data!: string; 
}
