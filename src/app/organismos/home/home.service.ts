import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserFindResponse, UserLoginRequest, UserLoginResponse, UserRegisterRequest } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private api = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  registrar(user: UserRegisterRequest) {
    return this.http.post(`${this.api}user`, user);
  }

  login(user: UserLoginRequest) {
    return this.http.post<UserLoginResponse>(`${this.api}user/auth`, user);
  }

  buscarUsuarios() {
    return this.http.get<UserFindResponse>(`${this.api}user`);
  }
}
