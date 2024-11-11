import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  template: `
    <h1>Welcome to My Component!</h1>
    <p>This is a simple component rendering example.</p>
  `,
  styles: [
    `h1 {
      color: blue;
    }`
  ]
})
export class MyComponentComponent {

}
