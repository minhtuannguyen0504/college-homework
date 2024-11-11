import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss'
})
export class ChildAComponent {
  @Input() data!: string;
  @Output() update = new EventEmitter<string>();

  changeData() {  
    const newData = 'Data from Child A';
    this.update.emit(newData);
  }
}
