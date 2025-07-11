export interface Account {
  id: string;
  type: string;
  accountNumber: string;
  balance: number;
  currency: 'CAD' | 'USD';
  lastUpdated: Date;
  icon: string;
}