export interface DashboardStats {
  pendingApprovalOrders: number;
  pendingApprovalTransfers: number;
  attentionRequiredOrders: number;
  scheduledPaymentsCAD: number;
  scheduledPaymentsUSD: number;
  nextScheduledPaymentDate: string;
  completedThisMonthCAD: number;
  completedThisMonthUSD: number;
}