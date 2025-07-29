import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {
  private api = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  buscarContaDoUsuario() {
    return this.http.get(`${this.api}account`);
  }
}
