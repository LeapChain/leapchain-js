/** The model for LEAPCHAIN transactions. */
export interface Transaction {
  amount: number;
  fee?: string;
  memo?: string;
  recipient: string;
}
