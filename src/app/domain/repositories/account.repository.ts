import { Observable } from 'rxjs';
import { AccountTotal } from '../../models/account';

export abstract class AccountRepository {
  abstract buscarContaDoUsuario(): Observable<AccountTotal>;
}
