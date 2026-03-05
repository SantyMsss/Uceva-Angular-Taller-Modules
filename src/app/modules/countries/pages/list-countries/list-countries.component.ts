import { Component, inject, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interface';
import { CountriesService } from '../../services/countries.service';

/**
 * Componente contenedor de países.
 *
 * Se utiliza para gestionar y mostrar un listado de países
 * utilizando el componente `TableCountriesComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CountriesService`
 * para obtener los países desde la API de REST Countries y pasarlos
 * al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-countries></app-list-countries>
 * ```
 */
@Component({
  selector: 'app-list-countries',
  template: `<app-table-countries [countries]="countries" ></app-table-countries>`,
  standalone: false,
})
export class ListCountriesComponent implements OnInit {
  /**
   * Listado de países obtenidos desde el servicio.
   * @type {Country[]}
   */
  countries: Country[] = [];
  /**
   * Servicio para obtener países.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private countriesService = inject(CountriesService);

  /**
   * Inicializa el componente y carga los países.
   * @remarks
   * Se suscribe al método `getAllCountries()` del servicio y
   * asigna los datos recibidos a la propiedad `countries`.
   */
  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe({
      next: (countries) => this.countries = countries,
      error: (error) => console.error(error),
    })
  }
}
