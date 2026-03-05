import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de personas.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con las personas, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-people></app-people>
 * ```
 */
@Component({
  selector: 'app-people',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class PeopleComponent { }
