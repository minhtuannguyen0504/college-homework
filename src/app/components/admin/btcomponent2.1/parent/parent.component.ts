import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent', // Selector cho ParentComponent
  standalone: true,
  imports: [ChildComponent], // Nhập ChildComponent
  template: `<app-child [data]="parentData"></app-child>`, // Sử dụng app-child ở đây
})
export class ParentComponent {
  parentData = 'Hello from Parent'; // Dữ liệu truyền tới Child
}
