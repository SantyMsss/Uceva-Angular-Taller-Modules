import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de países.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los países, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-countries></app-countries>
 * ```
 */
@Component({
  selector: 'app-countries',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CountriesComponent { }
