import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de pedidos.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los pedidos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-orders></app-orders>
 * ```
 */
@Component({
  selector: 'app-orders',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class OrdersComponent { }
