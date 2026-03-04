import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { COURSES } from '../../../core/config/courses.config';
import { Course } from '../interfaces/courses.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  getAllCourses(): Observable<Course[]> {
    return of(COURSES);
  }
}
