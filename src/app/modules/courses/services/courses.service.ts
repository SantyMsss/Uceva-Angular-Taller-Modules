import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from '../../../core/config/courses.config';
import { Course } from '../interfaces/courses.interface';

/**
 * Servicio para gestionar cursos.
 *
 * Se encarga de proporcionar métodos para obtener los cursos de la aplicación.
 * Actualmente devuelve un listado de cursos de ejemplo definidos en `COURSES`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los cursos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * private coursesService = inject(CoursesService);
 *
 * ngOnInit() {
 *   this.coursesService.getAllCourses().subscribe(courses => {
 *     console.log(courses);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  /**
   * Obtiene todos los cursos disponibles.
   *
   * @returns Observable con el listado de cursos (`Course[]`).
   */
  getAllCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}
