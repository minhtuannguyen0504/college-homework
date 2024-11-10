import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import User from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserWithNgrxService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log('UserService: Calling API');
    return this.http.get<User[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Error in UserService:', error);
        throw error;
      })
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`).pipe(
      catchError((error) => {
        console.log('Error getting user', error);
        throw error;
      })
    );
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError((error) => {
        console.log('Error creating user: ', error);
        throw error;
      })
    );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user).pipe(
      catchError((error) => {
        console.log('Error updating user: ', error);
        throw error;
      })
    );
  }
}
