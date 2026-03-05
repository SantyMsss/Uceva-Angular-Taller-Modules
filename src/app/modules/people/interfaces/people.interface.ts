// Interfaces generadas a partir del JSON de https://randomuser.me/api/
// utilizando https://quicktype.io/ y adaptadas a TypeScript.

/**
 * Respuesta completa de la API de Random User.
 *
 * @remarks
 * Representa el objeto raíz devuelto por `https://randomuser.me/api/`.
 * Contiene un arreglo de resultados (`Person[]`) y metadatos de la consulta.
 *
 * @example
 * ```ts
 * const response: RandomUserResponse = {
 *   results: [{ gender: 'male', name: { title: 'Mr', first: 'John', last: 'Doe' }, ... }],
 *   info: { seed: 'abc', results: 10, page: 1, version: '1.4' }
 * };
 * ```
 */
export interface RandomUserResponse {
  /** Arreglo de personas retornadas por la API */
  results: Person[];

  /** Metadatos de la consulta */
  info: RandomUserInfo;
}

/**
 * Metadatos de la respuesta de Random User.
 *
 * @remarks
 * Contiene información sobre la semilla utilizada, la cantidad de resultados,
 * la página actual y la versión de la API.
 *
 * @example
 * ```ts
 * const info: RandomUserInfo = {
 *   seed: 'f5c36df14448740f',
 *   results: 10,
 *   page: 1,
 *   version: '1.4'
 * };
 * ```
 */
export interface RandomUserInfo {
  /** Semilla utilizada para generar los resultados */
  seed: string;

  /** Cantidad de resultados retornados */
  results: number;

  /** Página actual de resultados */
  page: number;

  /** Versión de la API */
  version: string;
}

/**
 * Interfaz que representa una persona del sistema Random User.
 *
 * @remarks
 * Contiene toda la información personal retornada por la API,
 * incluyendo nombre, ubicación, credenciales, fechas y fotografía.
 *
 * @example
 * ```ts
 * const persona: Person = {
 *   gender: 'male',
 *   name: { title: 'Mr', first: 'Piero', last: 'Roche' },
 *   location: { street: { number: 9187, name: 'Avenue Debrousse' }, city: 'Alterswil', state: 'Solothurn', country: 'Switzerland', postcode: 5866, coordinates: { latitude: '-58.5374', longitude: '-83.5345' }, timezone: { offset: '+7:00', description: 'Bangkok, Hanoi, Jakarta' } },
 *   email: 'piero.roche@example.com',
 *   login: { uuid: 'cede00a0-3b9f-4320-8ca2-ce528158798d', username: 'purplecat786', password: 'route66', salt: 'nRL9ojbW', md5: 'b65001b1cbbf3d7b0ef81ea276e5a06a', sha1: '26007f31bd69408042cfca422a5a91959b6cd3ff', sha256: '52ff3084378e00cf6d4a203179abf36c085a9bb89965df91dd59b7fbfe143b67' },
 *   dob: { date: '1994-06-02T05:45:25.900Z', age: 31 },
 *   registered: { date: '2008-09-01T20:16:50.585Z', age: 17 },
 *   phone: '075 354 55 84',
 *   cell: '077 213 83 51',
 *   id: { name: 'AVS', value: '756.3363.3245.74' },
 *   picture: { large: 'https://randomuser.me/api/portraits/men/17.jpg', medium: 'https://randomuser.me/api/portraits/med/men/17.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/17.jpg' },
 *   nat: 'CH'
 * };
 * ```
 */
export interface Person {
  /** Género de la persona */
  gender: PersonGender;

  /** Nombre completo de la persona */
  name: PersonName;

  /** Ubicación geográfica de la persona */
  location: PersonLocation;

  /** Correo electrónico */
  email: string;

  /** Credenciales de acceso */
  login: PersonLogin;

  /** Fecha de nacimiento y edad */
  dob: PersonDob;

  /** Fecha de registro y antigüedad */
  registered: PersonDob;

  /** Número de teléfono fijo */
  phone: string;

  /** Número de teléfono celular */
  cell: string;

  /** Identificación oficial */
  id: PersonId;

  /** URLs de la fotografía en distintos tamaños */
  picture: PersonPicture;

  /** Nacionalidad (código ISO) */
  nat: string;
}

/**
 * Fecha y edad de una persona.
 *
 * @remarks
 * Se utiliza tanto para la fecha de nacimiento (`dob`) como para
 * la fecha de registro (`registered`).
 *
 * @example
 * ```ts
 * const dob: PersonDob = { date: '1994-06-02T05:45:25.900Z', age: 31 };
 * ```
 */
export interface PersonDob {
  /** Fecha en formato ISO 8601 */
  date: string;

  /** Edad calculada */
  age: number;
}

/**
 * Identificación oficial de una persona.
 *
 * @example
 * ```ts
 * const id: PersonId = { name: 'AVS', value: '756.3363.3245.74' };
 * ```
 */
export interface PersonId {
  /** Nombre del tipo de identificación */
  name: string;

  /** Valor del documento de identidad */
  value: string;
}

/**
 * Ubicación geográfica de una persona.
 *
 * @remarks
 * Incluye dirección, ciudad, estado, país, código postal,
 * coordenadas geográficas y zona horaria.
 *
 * @example
 * ```ts
 * const location: PersonLocation = {
 *   street: { number: 9187, name: 'Avenue Debrousse' },
 *   city: 'Alterswil',
 *   state: 'Solothurn',
 *   country: 'Switzerland',
 *   postcode: 5866,
 *   coordinates: { latitude: '-58.5374', longitude: '-83.5345' },
 *   timezone: { offset: '+7:00', description: 'Bangkok, Hanoi, Jakarta' }
 * };
 * ```
 */
export interface PersonLocation {
  /** Dirección (calle y número) */
  street: PersonStreet;

  /** Ciudad */
  city: string;

  /** Estado o provincia */
  state: string;

  /** País */
  country: string;

  /** Código postal */
  postcode: number;

  /** Coordenadas geográficas */
  coordinates: PersonCoordinates;

  /** Zona horaria */
  timezone: PersonTimezone;
}

/**
 * Coordenadas geográficas de una ubicación.
 *
 * @example
 * ```ts
 * const coords: PersonCoordinates = { latitude: '-58.5374', longitude: '-83.5345' };
 * ```
 */
export interface PersonCoordinates {
  /** Latitud (como cadena) */
  latitude: string;

  /** Longitud (como cadena) */
  longitude: string;
}

/**
 * Dirección de una persona (calle).
 *
 * @example
 * ```ts
 * const street: PersonStreet = { number: 9187, name: 'Avenue Debrousse' };
 * ```
 */
export interface PersonStreet {
  /** Número de la calle */
  number: number;

  /** Nombre de la calle */
  name: string;
}

/**
 * Zona horaria de una ubicación.
 *
 * @example
 * ```ts
 * const tz: PersonTimezone = { offset: '+7:00', description: 'Bangkok, Hanoi, Jakarta' };
 * ```
 */
export interface PersonTimezone {
  /** Desplazamiento UTC */
  offset: string;

  /** Descripción de la zona horaria */
  description: string;
}

/**
 * Credenciales de login de una persona.
 *
 * @example
 * ```ts
 * const login: PersonLogin = {
 *   uuid: 'cede00a0-3b9f-4320-8ca2-ce528158798d',
 *   username: 'purplecat786',
 *   password: 'route66',
 *   salt: 'nRL9ojbW',
 *   md5: 'b65001b1cbbf3d7b0ef81ea276e5a06a',
 *   sha1: '26007f31bd69408042cfca422a5a91959b6cd3ff',
 *   sha256: '52ff3084378e00cf6d4a203179abf36c085a9bb89965df91dd59b7fbfe143b67'
 * };
 * ```
 */
export interface PersonLogin {
  /** UUID único */
  uuid: string;

  /** Nombre de usuario */
  username: string;

  /** Contraseña */
  password: string;

  /** Sal utilizada para hashear */
  salt: string;

  /** Hash MD5 */
  md5: string;

  /** Hash SHA-1 */
  sha1: string;

  /** Hash SHA-256 */
  sha256: string;
}

/**
 * Nombre completo de una persona.
 *
 * @example
 * ```ts
 * const name: PersonName = { title: 'Mr', first: 'Piero', last: 'Roche' };
 * ```
 */
export interface PersonName {
  /** Título (Mr, Mrs, Ms, etc.) */
  title: string;

  /** Primer nombre */
  first: string;

  /** Apellido */
  last: string;
}

/**
 * URLs de la fotografía de una persona en distintos tamaños.
 *
 * @example
 * ```ts
 * const picture: PersonPicture = {
 *   large: 'https://randomuser.me/api/portraits/men/17.jpg',
 *   medium: 'https://randomuser.me/api/portraits/med/men/17.jpg',
 *   thumbnail: 'https://randomuser.me/api/portraits/thumb/men/17.jpg'
 * };
 * ```
 */
export interface PersonPicture {
  /** URL de la imagen grande */
  large: string;

  /** URL de la imagen mediana */
  medium: string;

  /** URL de la imagen miniatura */
  thumbnail: string;
}

/**
 * Género de una persona.
 *
 * @remarks
 * Restringe los valores a 'male' o 'female', los cuales son
 * los únicos valores retornados por la API de Random User.
 *
 * Se utiliza para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const genero: PersonGender = 'male';
 * ```
 */
export type PersonGender = 'male' | 'female';
