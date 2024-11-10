import { createAction, props } from '@ngrx/store';
import User from '../../interfaces/user';

// Get users
export const getUsers = createAction('[User] get users');
export const getUsersSuccess = createAction(
  '[User] get users success',
  props<{ users: User[] }>()
);
export const getUsersFailure = createAction(
  '[User] get users failure',
  props<{ error: string }>()
);

// Get user by id
export const getUser = createAction('[user] get user', props<{ id: number }>());
export const getUserSuccess = createAction(
  '[user] get user success',
  props<{ users: User }>()
);
export const getUserFailure = createAction(
  '[user] get user failure',
  props<{ error: string }>()
);

// Create user
export const createUser = createAction(
  '[user] create user',
  props<{ user: User }>()
);
export const createUserSuccess = createAction(
  '[user] create user success',
  props<{ users: User }>()
);
export const createUserFailure = createAction(
  '[user] create user failure',
  props<{ error: string }>()
);

// Update user
export const updateUser = createAction(
  '[user] update user',
  props<{ user: User }>()
);
export const updateUserSuccess = createAction(
  '[user] update user success',
  props<{ users: User }>()
);
export const updateUserFailure = createAction(
  '[user] update user failure',
  props<{ error: string }>()
);

export const deleteUser = createAction(
  '[user] delete user',
  props<{ id: number }>()
);
