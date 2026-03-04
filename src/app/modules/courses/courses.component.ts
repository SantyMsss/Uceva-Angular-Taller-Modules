import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de cursos.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los cursos, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-courses></app-courses>
 * ```
 */
@Component({
  selector: 'app-courses',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class CoursesComponent { }
