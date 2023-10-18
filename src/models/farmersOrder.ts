export interface IOrder  {
  farmerName: string;
  landSize: number;
  fertilizer: string;
  fertilizerQuantity: number;
  seeds: string;
  seedsQuantity: number;
  isPaid: boolean;
  status: string;
  amountToBePaid: number
}