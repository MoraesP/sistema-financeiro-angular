import { Injectable, signal, WritableSignal } from '@angular/core';
import { AccountResponse, AccountTotal } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  contaUsuario: WritableSignal<AccountTotal | null> = signal(null);
}
