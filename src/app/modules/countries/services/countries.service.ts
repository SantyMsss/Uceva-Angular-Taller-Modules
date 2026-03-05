import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';

/**
 * Servicio para gestionar países desde la API de REST Countries.
 *
 * Se encarga de realizar peticiones HTTP GET a `https://restcountries.com/v3.1/all`
 * para obtener un listado de países con su información básica.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los países.
 * Utiliza `HttpClient` para consumir la API pública y solicita solo los campos
 * necesarios mediante el parámetro `fields`.
 *
 * @example
 * ```ts
 * private countriesService = inject(CountriesService);
 *
 * ngOnInit() {
 *   this.countriesService.getAllCountries().subscribe(countries => {
 *     console.log(countries);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  /**
   * Instancia de HttpClient inyectada para realizar peticiones HTTP.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private http = inject(HttpClient);

  /**
   * URL base de la API de REST Countries con los campos seleccionados.
   */
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags,cca3';

  /**
   * Obtiene todos los países desde la API de REST Countries.
   *
   * @returns Observable con el listado de países (`Country[]`).
   *
   * @remarks
   * Realiza una petición GET a la API solicitando únicamente los campos
   * necesarios para optimizar la carga de datos.
   */
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }
}
