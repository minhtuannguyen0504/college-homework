import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import User from '../../interfaces/user';
import { Store } from '@ngrx/store';
import {
  selectUsers,
  selectLoading,
  selectError,
} from '../../state/selectors/user.selector';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../../state/actions/user.actions';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-with-ngrx',
  standalone: true,
  imports: [CommonModule, FormsModule], // for ngFor, ngIf
  templateUrl: './user-with-ngrx.component.html',
  styleUrl: './user-with-ngrx.component.scss',
})
export class UserWithNgrxComponent implements OnInit, OnDestroy {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  private destroy$ = new Subject<void>();

  // Fields
  id = '';
  name = '';
  username = '';
  email = '';
  address = '';
  company = '';

  // formMethod
  method = '';

  constructor(private store: Store) {
    this.users$ = this.store.select(selectUsers);
    this.loading$ = this.store.select(selectLoading);
    this.error$ = this.store.select(selectError);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.onGetUsers();
  }

  onGetUsers() {
    this.store.dispatch(getUsers());
  }

  onGetUser(id: number) {
    this.store.dispatch(getUser({ id }));
  }

  onDeleteUser(id: number) {
    this.store.dispatch(deleteUser({ id }));
  }

  handleSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const user: User = {
      id: parseInt(this.id, 10),
      name: this.name,
      username: this.username,
      email: this.email,
      address: {
        street: this.address,
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          let: '',
          lng: '',
        },
      },
      phone: '',
      company: {
        name: this.company,
        catchPhrase: '',
        bs: '',
      },
    };

    if (this.method === 'add') {
      this.store.dispatch(createUser({ user }));
    } else if (this.method === 'update') {
      this.store.dispatch(updateUser({ user }));
    }

    this.onReset();
  }

  onReset() {
    this.id = '';
    this.name = '';
    this.username = '';
    this.email = '';
    this.address = '';
    this.company = '';

    this.method = '';
  }

  showAddForm() {
    this.method = 'add';
  }

  showUpdateForm(user: User) {
    this.method = 'update';
    this.id = user.id.toString();
    this.name = user.name;
    this.username = user.username;
    this.email = user.email;
    this.address = user.address.street;
    this.company = user.company.name;
  }
}
