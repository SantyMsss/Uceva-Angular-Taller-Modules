export interface Order {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  status: OrderStatus;
}

export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';
