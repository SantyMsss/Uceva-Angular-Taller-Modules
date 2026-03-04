import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { COURSES } from '../../../../core/config/courses.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableCoursesComponent } from './table-courses.component';

describe('TableCoursesComponent', () => {
  let component: TableCoursesComponent;
  let fixture: ComponentFixture<TableCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCoursesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCoursesComponent);
    component = fixture.componentInstance;
    component.courses = COURSES;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada curso', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.courses.length);
  });

  it('debería mostrar los datos del curso en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const course = component.courses[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(course.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(course.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(course.instructor);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(course.credits));
      expect(columns[4].nativeElement.textContent.trim()).toBe(course.schedule);
      expect(columns[5].nativeElement.textContent.trim()).toBe(course.modality);
    });
  });

  it('debería mapear cada modalidad a su BadgeType correcto', () => {
    expect(component.modalityMap['Presencial']).toBe('success');
    expect(component.modalityMap['Virtual']).toBe('primary');
    expect(component.modalityMap['Hibrido']).toBe('warning');
  });
});
