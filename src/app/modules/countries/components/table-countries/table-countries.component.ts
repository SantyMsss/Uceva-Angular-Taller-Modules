import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Country, CountryRegion } from '../../interfaces/countries.interface';

/**
 * Componente de tabla de países.
 *
 * Se utiliza para mostrar un listado de países en una tabla,
 * mostrando información como bandera, nombre, capital, población,
 * idiomas y un badge visual que indica la región de cada país.
 *
 * @remarks
 * Este componente recibe los países desde un componente padre
 * a través del Input `countries` y utiliza el mapeo `regionMap`
 * para asignar colores a los badges según la región.
 *
 * Los datos provienen de la API pública `https://restcountries.com/v3.1/all`.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-countries [countries]="countriesList"></app-table-countries>
 * ```
 */
@Component({
  selector: 'app-table-countries',
  templateUrl: './table-countries.component.html',
  standalone: false,
})
export class TableCountriesComponent {
  /**
   * Listado de países que se mostrarán en la tabla.
   * @type {Country[]}
   * @remarks
   * Este Input permite pasar un array de países desde un componente padre,
   * generalmente `ListCountriesComponent`. Cada país debe cumplir la interfaz `Country`.
   */
  @Input() countries: Country[] = [];

  /**
   * Mapeo de regiones a tipos de Badge.
   * @type {Record<CountryRegion, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada región:
   * - 'Africa' → 'warning' (amarillo)
   * - 'Americas' → 'success' (verde)
   * - 'Asia' → 'danger' (rojo)
   * - 'Europe' → 'primary' (azul)
   * - 'Oceania' → 'info' (celeste)
   * - 'Antarctic' → 'secondary' (gris)
   *
   * Esto permite que en la tabla cada país tenga un badge visual que indique su región
   * de forma clara para el usuario.
   */
  regionMap: Record<CountryRegion, BadgeType> = {
    'Africa': 'warning',
    'Americas': 'success',
    'Asia': 'danger',
    'Europe': 'primary',
    'Oceania': 'info',
    'Antarctic': 'secondary',
  }

  /**
   * Obtiene los idiomas de un país como una cadena separada por comas.
   *
   * @param languages - Objeto con los idiomas del país (clave: código, valor: nombre).
   * @returns Cadena con los idiomas separados por comas, o 'N/A' si no hay idiomas.
   *
   * @example
   * ```ts
   * getLanguages({ spa: 'Spanish', eng: 'English' }); // 'Spanish, English'
   * ```
   */
  getLanguages(languages: Record<string, string> | undefined): string {
    if (!languages) return 'N/A';
    return Object.values(languages).join(', ');
  }
}
