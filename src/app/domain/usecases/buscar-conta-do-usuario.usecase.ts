import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountTotal } from '../../models/account';
import { AccountRepository } from '../repositories/account.repository';

@Injectable({ providedIn: 'root' })
export class BuscarContaDoUsuarioUseCase {
  constructor(private readonly repository: AccountRepository) {}

  execute(): Observable<AccountTotal> {
    return this.repository.buscarContaDoUsuario();
  }
}
