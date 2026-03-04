/**
 * Interfaz que representa un pedido del sistema.
 *
 * Contiene la información básica necesaria para mostrar un pedido
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada pedido debe tener un `id` único, un `customer` que identifica al cliente,
 * un `product` solicitado, una `quantity`, un `total` en pesos colombianos
 * y un `status` que indica el estado del pedido.
 *
 * @example
 * ```ts
 * const pedido: Order = {
 *   id: 1,
 *   customer: 'Carlos Ramírez',
 *   product: 'Leche entera',
 *   quantity: 3,
 *   total: 13500,
 *   status: 'Entregado'
 * };
 * ```
 */
export interface Order {
  /** Identificador único del pedido */
  id: number;

  /** Nombre del cliente que realizó el pedido */
  customer: string;

  /** Nombre del producto solicitado */
  product: string;

  /** Cantidad de unidades solicitadas */
  quantity: number;

  /** Valor total del pedido en pesos */
  total: number;

  /** Estado actual del pedido */
  status: OrderStatus;
}

/**
 * Tipo de estado de un pedido.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Pendiente'
 * - 'Enviado'
 * - 'Entregado'
 * - 'Cancelado'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: OrderStatus = 'Enviado';
 * ```
 */
export type OrderStatus = 'Pendiente' | 'Enviado' | 'Entregado' | 'Cancelado';
