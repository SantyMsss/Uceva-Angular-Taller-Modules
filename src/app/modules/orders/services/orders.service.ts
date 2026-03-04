import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORDERS } from '../../../core/config/orders.config';
import { Order } from '../interfaces/orders.interface';

/**
 * Servicio para gestionar pedidos.
 *
 * Se encarga de proporcionar métodos para obtener los pedidos de la aplicación.
 * Actualmente devuelve un listado de pedidos de ejemplo definidos en `ORDERS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los pedidos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * private ordersService = inject(OrdersService);
 *
 * ngOnInit() {
 *   this.ordersService.getAllOrders().subscribe(orders => {
 *     console.log(orders);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  /**
   * Obtiene todos los pedidos disponibles.
   *
   * @returns Observable con el listado de pedidos (`Order[]`).
   */
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
