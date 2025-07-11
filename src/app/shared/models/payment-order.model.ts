export interface PaymentOrder {
  id: string;
  orderNumber: string;
  processingDate: Date;
  status: string
  amount: number;
  currency: 'CAD' | 'USD';
  supplier?: string;
  paymentMethod?: string;
}