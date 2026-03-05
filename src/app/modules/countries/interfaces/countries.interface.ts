// Interfaces generadas a partir del JSON de https://restcountries.com/v3.1/all
// utilizando https://quicktype.io/ y adaptadas a TypeScript.

/**
 * Interfaz que representa un país del sistema REST Countries.
 *
 * Contiene la información básica necesaria para mostrar un país
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada país incluye nombre, capital, región, población, idiomas,
 * banderas y un código ISO (cca3).
 *
 * Los datos se obtienen de la API pública `https://restcountries.com/v3.1/all`.
 *
 * @example
 * ```ts
 * const pais: Country = {
 *   name: { common: 'Colombia', official: 'Republic of Colombia' },
 *   capital: ['Bogotá'],
 *   region: 'Americas',
 *   population: 50882891,
 *   languages: { spa: 'Spanish' },
 *   flags: { png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg', alt: 'Colombia flag' },
 *   cca3: 'COL'
 * };
 * ```
 */
export interface Country {
  /** Nombre del país */
  name: CountryName;

  /** Capitales del país (puede tener más de una) */
  capital?: string[];

  /** Región geográfica del país */
  region: CountryRegion;

  /** Población total del país */
  population: number;

  /** Idiomas hablados en el país (clave: código ISO, valor: nombre) */
  languages?: Record<string, string>;

  /** URLs de las banderas del país */
  flags: CountryFlags;

  /** Código ISO 3166-1 alpha-3 */
  cca3: string;
}

/**
 * Nombre de un país.
 *
 * @example
 * ```ts
 * const nombre: CountryName = {
 *   common: 'Colombia',
 *   official: 'Republic of Colombia'
 * };
 * ```
 */
export interface CountryName {
  /** Nombre común del país */
  common: string;

  /** Nombre oficial del país */
  official: string;
}

/**
 * URLs de las banderas de un país.
 *
 * @example
 * ```ts
 * const banderas: CountryFlags = {
 *   png: 'https://flagcdn.com/w320/co.png',
 *   svg: 'https://flagcdn.com/co.svg',
 *   alt: 'The flag of Colombia'
 * };
 * ```
 */
export interface CountryFlags {
  /** URL de la bandera en formato PNG */
  png: string;

  /** URL de la bandera en formato SVG */
  svg: string;

  /** Texto alternativo de la bandera */
  alt?: string;
}

/**
 * Región geográfica de un país.
 *
 * @remarks
 * Este tipo restringe las regiones a los valores definidos
 * por la API de REST Countries:
 * - 'Africa'
 * - 'Americas'
 * - 'Asia'
 * - 'Europe'
 * - 'Oceania'
 * - 'Antarctic'
 *
 * Se utiliza para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const region: CountryRegion = 'Americas';
 * ```
 */
export type CountryRegion = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania' | 'Antarctic';
