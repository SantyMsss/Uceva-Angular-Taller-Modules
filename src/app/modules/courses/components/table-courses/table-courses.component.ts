import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Course, CourseModality } from '../../interfaces/courses.interface';

@Component({
  selector: 'app-table-courses',
  templateUrl: './table-courses.component.html',
  standalone: false,
})
export class TableCoursesComponent {
  @Input() courses: Course[] = [];

  modalityMap: Record<CourseModality, BadgeType> = {
    'Presencial': 'success',
    'Virtual': 'primary',
    'Hibrido': 'warning',
  }
}
