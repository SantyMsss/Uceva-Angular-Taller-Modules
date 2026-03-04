import { Component, inject, OnInit } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { OrdersService } from '../../services/orders.service';

/**
 * Componente contenedor de pedidos.
 *
 * Se utiliza para gestionar y mostrar un listado de pedidos
 * utilizando el componente `TableOrdersComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `OrdersService`
 * para obtener los pedidos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-orders></app-list-orders>
 * ```
 */
@Component({
  selector: 'app-list-orders',
  template: `<app-table-orders [orders]="orders" ></app-table-orders>`,
  standalone: false,
})
export class ListOrdersComponent implements OnInit {
  /**
   * Listado de pedidos obtenidos desde el servicio.
   * @type {Order[]}
   */
  orders: Order[] = [];
  /**
   * Servicio para obtener pedidos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private ordersService = inject(OrdersService);

  /**
   * Inicializa el componente y carga los pedidos.
   * @remarks
   * Se suscribe al método `getAllOrders()` del servicio y
   * asigna los datos recibidos a la propiedad `orders`.
   */
  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe({
      next: (orders) => this.orders = orders,
      error: (error) => console.error(error),
    })
  }
}
