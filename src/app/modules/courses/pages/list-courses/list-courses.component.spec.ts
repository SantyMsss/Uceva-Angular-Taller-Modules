import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { COURSES } from '../../../../core/config/courses.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableCoursesComponent } from '../../components/table-courses/table-courses.component';
import { CoursesService } from '../../services/courses.service';
import { ListCoursesComponent } from './list-courses.component';

describe('ListCoursesComponent', () => {
  let component: ListCoursesComponent;
  let fixture: ComponentFixture<ListCoursesComponent>;
  let coursesService: CoursesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCoursesComponent, TableCoursesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCoursesComponent);
    component = fixture.componentInstance;
    coursesService = TestBed.inject(CoursesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCourses al iniciar', () => {
    const spyGetAllCourses = jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES));
    fixture.detectChanges();
    expect(spyGetAllCourses).toHaveBeenCalled();
  });

  it('debería asignar los cursos recibidos del servicio', () => {
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES));
    fixture.detectChanges();
    expect(component.courses).toEqual(COURSES);
  });

  it('debería pasar los cursos al componente table-courses', () => {
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(of(COURSES));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableCoursesComponent))
      .componentInstance;
    expect(tableComponent.courses).toEqual(COURSES);
  });

  it('debería manejar el error cuando falla getAllCourses', () => {
    component.courses = [];
    const errorResponse = new Error('Error al cargar cursos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(coursesService, 'getAllCourses').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(coursesService.getAllCourses).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.courses.length).toBe(0);
  });
});
