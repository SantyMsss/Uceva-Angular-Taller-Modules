/**
 * Interfaz que representa un curso académico del sistema.
 *
 * Contiene la información básica necesaria para mostrar un curso
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada curso debe tener un `id` único, un `name` descriptivo,
 * un `instructor`, la cantidad de `credits`, un `schedule` (horario)
 * y una `modality` que indica cómo se imparte.
 *
 * @example
 * ```ts
 * const curso: Course = {
 *   id: 1,
 *   name: 'Arquitectura de Software',
 *   instructor: 'Dr. Rivera',
 *   credits: 4,
 *   schedule: 'Lun-Mie 8:00-10:00',
 *   modality: 'Presencial'
 * };
 * ```
 */
export interface Course {
  /** Identificador único del curso */
  id: number;

  /** Nombre del curso */
  name: string;

  /** Nombre del instructor que imparte el curso */
  instructor: string;

  /** Cantidad de créditos académicos del curso */
  credits: number;

  /** Horario en que se dicta el curso */
  schedule: string;

  /** Modalidad de impartición del curso */
  modality: CourseModality;
}

/**
 * Tipo de modalidad de un curso.
 *
 * @remarks
 * Este tipo restringe las modalidades a los valores predefinidos:
 * - 'Presencial'
 * - 'Virtual'
 * - 'Hibrido'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const modalidad: CourseModality = 'Virtual';
 * ```
 */
export type CourseModality = 'Presencial' | 'Virtual' | 'Hibrido';
