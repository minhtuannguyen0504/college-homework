import User from '../interfaces/user';

export interface UserState {
  users: User[];
  count: number;
  loading: boolean;
  error: string | null;
}

export const userStore: UserState = {
  users: [],
  count: 0,
  loading: false,
  error: null,
};
