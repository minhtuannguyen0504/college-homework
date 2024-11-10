import { createReducer, on } from '@ngrx/store';
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  getUsersSuccess,
  getUsersFailure,
} from '../actions/user.actions';
import { userStore } from '../../store/user.store';

export const userReducer = createReducer(
  userStore,
  // Get users
  on(getUsers, (state) => ({ ...state, loading: true, error: null })),
  on(getUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    count: users.length,
    loading: false,
  })),
  on(getUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),

  on(getUser, (state, { id }) => {
    const user = state.users.find((u) => u.id === id);
    return { ...state, user: user || null };
  }),
  on(createUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    count: state.count + 1,
  })),
  on(updateUser, (state, { user }) => {
    const users = state.users.map((u) => (u.id !== user.id ? u : user));
    return { ...state, users };
  }),
  on(deleteUser, (state, { id }) => {
    const users = state.users.filter((u) => u.id !== id);
    return { ...state, users, count: state.count - 1 };
  })
);
