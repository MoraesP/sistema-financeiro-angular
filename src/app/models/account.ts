import { Card } from './card';

export interface Account {
  id: string;
  type: 'Credit' | 'Debit';
  userId: string;
}

export interface AccountResponse {
  message: string;
  result: {
    account: Account[];
    transacations: any[];
    cards: Card[];
  };
}
