export interface UserRegister {
  username: string;
  email: string;
  password: string;
}

export interface UserLoginRequest {
  email: string;
  password: string;
}

export interface UserLoginResponse {
  message: string;
  result: {
    token: string;
  };
}
