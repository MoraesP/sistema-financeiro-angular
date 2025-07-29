export interface User {
  username: string;
  email: string;
  password: string;
}

export type UserLoginRequest = Pick<User, 'email' | 'password'>;

export interface UserLoginResponse {
  message: string;
  result: {
    token: string;
  };
}
