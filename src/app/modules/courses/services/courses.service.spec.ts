import { TestBed } from '@angular/core/testing';
import { COURSES } from '../../../core/config/courses.config';
import { CoursesService } from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCourses debería retornar un observable con los cursos', (done) => {
    service.getAllCourses().subscribe(courses => {
      expect(courses).toEqual(COURSES);
      expect(courses.length).toBe(COURSES.length);
      done();
    });
  });
});
