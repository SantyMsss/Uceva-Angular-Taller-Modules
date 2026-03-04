import { Component, inject, OnInit } from '@angular/core';
import { Course } from '../../interfaces/courses.interface';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-list-courses',
  template: `<app-table-courses [courses]="courses" ></app-table-courses>`,
  standalone: false,
})
export class ListCoursesComponent implements OnInit {
  courses: Course[] = [];
  private coursesService = inject(CoursesService);

  ngOnInit(): void {
    this.coursesService.getAllCourses().subscribe({
      next: (courses) => this.courses = courses,
      error: (error) => console.error(error),
    })
  }
}
