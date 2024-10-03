import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormBuilder, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})

export class UserComponent implements OnInit{

  users: any = [];
  user: any = {};
  error: string = '';
  loading: boolean = false;
  isAdd: boolean = false;
  isEdit: boolean = false;
  isSee: boolean = false;
  userForm: FormGroup;
  

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
    })
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.loading = true;
    console.log("Calling API...");
    this.userService.getUsers().subscribe(
      response => {
      console.log('API response: ', response);
      this.users = response;
      this.loading = false;
      console.log('Users: ', this.users);
      }, 
      error => {
        this.error = error;
        this.loading = false;
        console.error('API Error:', error);
      }
    );
  }

  getUser(id: number): void {
    this.loading = true;
    console.log("Calling API...");
    this.userService.getUser(id).subscribe(
      response => {
      console.log('API response: ', response);
      this.user = response;
      this.loading = false;
      console.log('User: ', this.user);
      }, 
      error => {
        this.error = error;
        this.loading = false;
        console.error('API Error:', error);
      }
    );
  }

  handleClickRow(event: any, id: number) {
    event.stopPropagation();
    this.isSee = true;
    this.getUser(id);
  }

  handleClickAdd() {
    this.isAdd = true;
  }

  handleClickEdit(event: any, id: number) {
    event.stopPropagation();
    this.isEdit = true;
    this.getUser(id);
  }

  reset() {
    this.isSee = false;
    this.isAdd = false;
    this.isEdit = false;
    this.user = {};
  }

  async handleSubmit(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const payload = this.userForm.value;
    if (this.isAdd) {
      const response = await this.userService.createUser(payload);
      this.users = [...this.users, response];
    } else if (this.isEdit) {
      const response = await this.userService.updateUser(this.user.id, payload);
      this.users = this.users.map((user: any) => {
        return user.id === response.id ? {...response} : user;
      });
    }
    this.reset();
  }

  async handleDeleteUser(event: any, id: number) {
    event.stopPropagation();
    try {
      await this.userService.deleteUser(id);
      this.users = this.users.filter((user: any) => user.id !== id);
    } catch (error) {
      console.log(error);
    }
  }
}
