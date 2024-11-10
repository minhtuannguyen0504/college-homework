import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import {
  getUsers,
  getUsersSuccess,
  getUsersFailure,
  createUser,
  createUserSuccess,
  updateUser,
  updateUserSuccess,
  updateUserFailure,
  createUserFailure,
} from '../actions/user.actions';
import { UserWithNgrxService } from '../../services/user-with-ngrx.service';

@Injectable()
export class UserEffects {
  private readonly actions$ = inject(Actions);
  constructor(private readonly userService: UserWithNgrxService) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUsers),
      mergeMap(() => {
        const users = this.userService.getUsers();
        console.log('Result of getUsers()', users);
        if (!users) {
          console.error('getUsers() returned undefined');
          return of(getUsersFailure({ error: 'No users data available' }));
        }
        return users?.pipe(
          map((users) => getUsersSuccess({ users })),
          catchError((error) => {
            console.error('Effect: Error getting users', error);
            return of(getUsersFailure({ error: error.message }));
          })
        );
      })
    )
  );

  createUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createUser),
      mergeMap((action) => {
        return this.userService.createUser(action.user).pipe(
          map((users) => createUserSuccess({ users })),
          catchError((error) => {
            console.error('Effect: Error getting users', error);
            return of(createUserFailure({ error: error.message }));
          })
        );
      })
    )
  );

  updateUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateUser),
      mergeMap((action) => {
        return this.userService.updateUser(action.user).pipe(
          map((users) => updateUserSuccess({ users })),
          catchError((error) => {
            console.error('Effect: Error getting users', error);
            return of(updateUserFailure({ error: error.message }));
          })
        );
      })
    )
  );
}
