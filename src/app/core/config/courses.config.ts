import { Course } from "../../modules/courses/interfaces/courses.interface";

/**
 * Listado de cursos académicos disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información básica de cursos, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Course[]}
 */
export const COURSES: Course[] = [
  { id: 1, name: 'Arquitectura de Software', instructor: 'Dr. Rivera', credits: 4, schedule: 'Lun-Mie 8:00-10:00', modality: 'Presencial' },
  { id: 2, name: 'Base de Datos II', instructor: 'Ing. Salazar', credits: 3, schedule: 'Mar-Jue 10:00-12:00', modality: 'Virtual' },
  { id: 3, name: 'Redes de Computadores', instructor: 'Ing. Morales', credits: 4, schedule: 'Lun-Mie 14:00-16:00', modality: 'Hibrido' },
  { id: 4, name: 'Inteligencia Artificial', instructor: 'Dra. Vargas', credits: 3, schedule: 'Mar-Jue 8:00-10:00', modality: 'Virtual' },
  { id: 5, name: 'Ingeniería de Software', instructor: 'Ing. Castillo', credits: 4, schedule: 'Vie 7:00-11:00', modality: 'Presencial' },
  { id: 6, name: 'Sistemas Operativos', instructor: 'Dr. Herrera', credits: 3, schedule: 'Lun-Mie 10:00-12:00', modality: 'Presencial' },
  { id: 7, name: 'Desarrollo Web', instructor: 'Ing. Paredes', credits: 3, schedule: 'Mar-Jue 14:00-16:00', modality: 'Hibrido' },
  { id: 8, name: 'Seguridad Informática', instructor: 'Ing. Duarte', credits: 3, schedule: 'Vie 14:00-18:00', modality: 'Virtual' },
  { id: 9, name: 'Compiladores', instructor: 'Dr. Quintero', credits: 4, schedule: 'Lun-Mie 16:00-18:00', modality: 'Presencial' },
  { id: 10, name: 'Computación en la Nube', instructor: 'Ing. Restrepo', credits: 3, schedule: 'Mar-Jue 16:00-18:00', modality: 'Hibrido' },
];
