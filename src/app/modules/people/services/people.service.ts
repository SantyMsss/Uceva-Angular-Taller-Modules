import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person, RandomUserResponse } from '../interfaces/people.interface';

/**
 * Servicio para gestionar personas desde la API de Random User.
 *
 * Se encarga de realizar peticiones HTTP GET a `https://randomuser.me/api/`
 * para obtener un listado de personas aleatorias.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a las personas.
 * Utiliza `HttpClient` para consumir la API pública.
 *
 * @example
 * ```ts
 * private peopleService = inject(PeopleService);
 *
 * ngOnInit() {
 *   this.peopleService.getAllPeople().subscribe(people => {
 *     console.log(people);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  /**
   * Instancia de HttpClient inyectada para realizar peticiones HTTP.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private http = inject(HttpClient);

  /**
   * URL base de la API de Random User.
   */
  private apiUrl = 'https://randomuser.me/api/?results=10';

  /**
   * Obtiene todas las personas desde la API de Random User.
   *
   * @returns Observable con el listado de personas (`Person[]`).
   *
   * @remarks
   * Realiza una petición GET a la API y extrae el arreglo `results`
   * de la respuesta para retornar solo las personas.
   */
  getAllPeople(): Observable<Person[]> {
    return this.http.get<RandomUserResponse>(this.apiUrl)
      .pipe(map(response => response.results));
  }
}
