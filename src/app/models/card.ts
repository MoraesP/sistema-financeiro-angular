export interface Card {
  id: string;
  accountId: string;
  type: 'Credit' | 'Debit';
  is_blocked: boolean;
  number: string;
  dueDate: Date;
  functions: string;
  cvc: string;
  paymentDate: Date;
  name: string;
}
