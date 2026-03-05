import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Person, PersonGender } from '../../interfaces/people.interface';

/**
 * Componente de tabla de personas.
 *
 * Se utiliza para mostrar un listado de personas en una tabla,
 * mostrando información como foto, nombre completo, email, teléfono,
 * país y un badge visual que indica el género de cada persona.
 *
 * @remarks
 * Este componente recibe las personas desde un componente padre
 * a través del Input `people` y utiliza el mapeo `genderMap`
 * para asignar colores a los badges según el género.
 *
 * Los datos provienen de la API pública `https://randomuser.me/api/`.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-people [people]="peopleList"></app-table-people>
 * ```
 */
@Component({
  selector: 'app-table-people',
  templateUrl: './table-people.component.html',
  standalone: false,
})
export class TablePeopleComponent {
  /**
   * Listado de personas que se mostrarán en la tabla.
   * @type {Person[]}
   * @remarks
   * Este Input permite pasar un array de personas desde un componente padre,
   * generalmente `ListPeopleComponent`. Cada persona debe cumplir la interfaz `Person`.
   */
  @Input() people: Person[] = [];

  /**
   * Mapeo de géneros a tipos de Badge.
   * @type {Record<PersonGender, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada género:
   * - 'male' → 'primary' (azul)
   * - 'female' → 'danger' (rojo/rosa)
   *
   * Esto permite que en la tabla cada persona tenga un badge visual que indique su género
   * de forma clara para el usuario.
   */
  genderMap: Record<PersonGender, BadgeType> = {
    'male': 'primary',
    'female': 'danger',
  }
}
