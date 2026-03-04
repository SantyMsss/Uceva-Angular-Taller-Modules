import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Course, CourseModality } from '../../interfaces/courses.interface';

/**
 * Componente de tabla de cursos.
 *
 * Se utiliza para mostrar un listado de cursos en una tabla,
 * mostrando información como nombre, instructor, créditos, horario y un badge
 * visual que indica la modalidad de cada curso.
 *
 * @remarks
 * Este componente recibe los cursos desde un componente padre
 * a través del Input `courses` y utiliza el mapeo `modalityMap`
 * para asignar colores a los badges según la modalidad.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-courses [courses]="coursesList"></app-table-courses>
 * ```
 */
@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  standalone: false,
})
export class TableCoursesComponent {
  /**
   * Listado de cursos que se mostrarán en la tabla.
   * @type {Course[]}
   * @remarks
   * Este Input permite pasar un array de cursos desde un componente padre,
   * generalmente `ListCoursesComponent`. Cada curso debe cumplir la interfaz `Course`.
   */
  @Input() courses: Course[] = [];

  /**
   * Mapeo de modalidades de cursos a tipos de Badge.
   * @type {Record<CourseModality, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada modalidad:
   * - 'Presencial' → 'success' (verde)
   * - 'Virtual' → 'primary' (azul)
   * - 'Hibrido' → 'warning' (amarillo)
   *
   * Esto permite que en la tabla cada curso tenga un badge visual que indique su modalidad
   * de forma clara para el usuario.
   */
  modalityMap: Record<CourseModality, BadgeType> = {
    'Presencial': 'success',
    'Virtual': 'primary',
    'Hibrido': 'warning',
  }
}
