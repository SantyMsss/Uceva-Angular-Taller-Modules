import { Order } from "../../modules/orders/interfaces/orders.interface";

export const ORDERS: Order[] = [
  { id: 1, customer: 'Carlos Ramírez', product: 'Leche entera', quantity: 3, total: 13500, status: 'Entregado' },
  { id: 2, customer: 'Ana Gómez', product: 'Queso campesino', quantity: 1, total: 8200, status: 'Pendiente' },
  { id: 3, customer: 'Luis Martínez', product: 'Pechuga de pollo', quantity: 2, total: 29000, status: 'Enviado' },
  { id: 4, customer: 'María Lopez', product: 'Manzanas rojas', quantity: 5, total: 26000, status: 'Cancelado' },
  { id: 5, customer: 'Jorge Fernández', product: 'Banano', quantity: 10, total: 28000, status: 'Entregado' },
  { id: 6, customer: 'Paola Ríos', product: 'Tomate chonto', quantity: 4, total: 14000, status: 'Enviado' },
  { id: 7, customer: 'Andrés Torres', product: 'Carne molida de res', quantity: 2, total: 25600, status: 'Pendiente' },
  { id: 8, customer: 'Lucía Mendoza', product: 'Yogurt natural', quantity: 6, total: 15000, status: 'Entregado' },
  { id: 9, customer: 'Sofía Pérez', product: 'Cebolla cabezona', quantity: 3, total: 9000, status: 'Cancelado' },
  { id: 10, customer: 'Miguel Castro', product: 'Pernil de cerdo', quantity: 1, total: 16000, status: 'Enviado' },
];
