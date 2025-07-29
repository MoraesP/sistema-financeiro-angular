import { Injectable, signal, WritableSignal } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  contaUsuario: WritableSignal<any> = signal(null);
}
