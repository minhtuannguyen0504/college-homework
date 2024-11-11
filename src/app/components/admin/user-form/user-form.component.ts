import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Thêm dòng này

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Thêm CommonModule ở đây
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {
  userForm: FormGroup;
  displayInfo: { name: string; email: string; age: number } | null = null;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      age: ['']
    });
  }

  onSubmit() {
    console.log(this.userForm.value);
  }

  updateInfo() {
    this.displayInfo = {
      name: this.userForm.get('name')?.value || '',
      email: this.userForm.get('email')?.value || '',
      age: this.userForm.get('age')?.value || 0
    };
  }
}
