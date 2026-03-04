export interface Course {
  id: number;
  name: string;
  instructor: string;
  credits: number;
  schedule: string;
  modality: CourseModality;
}

export type CourseModality = 'Presencial' | 'Virtual' | 'Hibrido';
