import { Injectable, signal, WritableSignal } from '@angular/core';
import { AccountResponse } from '../models/account';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  email: WritableSignal<string | null> = signal(null);
  contaUsuario: WritableSignal<AccountResponse | null> = signal(null);
}
