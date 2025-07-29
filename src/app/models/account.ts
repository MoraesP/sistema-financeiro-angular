import { Card } from './card';

export interface Account {
  id: string;
  type: 'Credit' | 'Debit';
  userId: string;
}

export interface AccountTotal {
  account: Account[];
  transacations: any[];
  cards: Card[];
}

export interface AccountResponse {
  message: string;
  result: AccountTotal;
}
