export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type UserData = Pick<User, 'id' | 'username' | 'email'>;

export type UserRegisterRequest = Pick<User, 'username' | 'email' | 'password'>;

export type UserLoginRequest = Pick<User, 'email' | 'password'>;

export interface UserLoginResponse {
  message: string;
  result: {
    token: string;
  };
}

export interface UserFindResponse {
  message: string;
  result: User[];
}
