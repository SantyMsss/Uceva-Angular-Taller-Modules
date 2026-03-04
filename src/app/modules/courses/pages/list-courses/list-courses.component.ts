import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/courses.interface';
import { CoursesService } from '../../services/courses.service';

/**
 * Componente contenedor de cursos.
 *
 * Se utiliza para gestionar y mostrar un listado de cursos
 * utilizando el componente `TableCoursesComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CoursesService`
 * para obtener los cursos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-courses></app-list-courses>
 * ```
 */
@Component({
  selector: 'app-list-courses',
  template: `<app-table-courses [courses]="courses" ></app-table-courses>`,
  standalone: false,
})
export class ListCoursesComponent implements OnInit {
  /**
   * Listado de cursos obtenidos desde el servicio.
   * @type {Course[]}
   */
  courses: Course[] = [];
  /**
   * Servicio para obtener cursos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private coursesService = inject(CoursesService);

  /**
   * Inicializa el componente y carga los cursos.
   * @remarks
   * Se suscribe al método `getAllCourses()` del servicio y
   * asigna los datos recibidos a la propiedad `courses`.
   */
  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: (courses) => this.courses = courses,
      error: (error) => console.error(error),
    })
  }
}
