import { Component, inject, OnInit } from '@angular/core';
import { Person } from '../../interfaces/people.interface';
import { PeopleService } from '../../services/people.service';

/**
 * Componente contenedor de personas.
 *
 * Se utiliza para gestionar y mostrar un listado de personas
 * utilizando el componente `TablePeopleComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `PeopleService`
 * para obtener las personas desde la API de Random User y pasarlas
 * al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-people></app-list-people>
 * ```
 */
@Component({
  selector: 'app-list-people',
  template: `<app-table-people [people]="people" ></app-table-people>`,
  standalone: false,
})
export class ListPeopleComponent implements OnInit {
  /**
   * Listado de personas obtenidas desde el servicio.
   * @type {Person[]}
   */
  people: Person[] = [];
  /**
   * Servicio para obtener personas.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private peopleService = inject(PeopleService);

  /**
   * Inicializa el componente y carga las personas.
   * @remarks
   * Se suscribe al método `getAllPeople()` del servicio y
   * asigna los datos recibidos a la propiedad `people`.
   */
  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe({
      next: (people) => this.people = people,
      error: (error) => console.error(error),
    })
  }
}
