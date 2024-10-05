import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  constructor(private apiService: ApiService) {}

  // ngOnInit() {
  //   this.apiService.getData().subscribe(
  //     (data: Object) => {
  //       console.log(data);
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
}

