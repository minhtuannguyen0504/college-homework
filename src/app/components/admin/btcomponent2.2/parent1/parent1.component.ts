import { Component } from '@angular/core';
import { ChildAComponent } from '../child-a/child-a.component';
import { ChildBComponent } from '../child-b/child-b.component';

@Component({
  selector: 'app-parent1',
  standalone: true,
  imports: [ChildAComponent, ChildBComponent],
  templateUrl: './parent1.component.html',
  styleUrl: './parent1.component.scss'
})
export class Parent1Component {
  dataToChildA = 'Hello from Parent to Child A';
  dataToChildB = 'Hello from Parent to Child B';

  handleChildAUpdate(event: string) {
    console.log('Received from Child A:', event);
  }
}
