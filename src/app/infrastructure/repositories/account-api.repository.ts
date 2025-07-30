import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AccountRepository } from '../../domain/repositories/account.repository';
import { AccountResponse, AccountTotal } from '../../models/account';

@Injectable({ providedIn: 'root' })
export class AccountApiRepository extends AccountRepository {
  private api = 'http://localhost:3000/';

  constructor(private readonly http: HttpClient) {
    super();
  }

  buscarContaDoUsuario(): Observable<AccountTotal> {
    return this.http.get<AccountResponse>(`${this.api}account`).pipe(map((response) => response.result));
  }
}
