import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TablePeopleComponent } from './table-people.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { Person } from '../../interfaces/people.interface';

const MOCK_PEOPLE: Person[] = [
  {
    gender: 'male',
    name: { title: 'Mr', first: 'John', last: 'Doe' },
    location: {
      street: { number: 123, name: 'Main St' },
      city: 'Springfield',
      state: 'Illinois',
      country: 'United States',
      postcode: 62701,
      coordinates: { latitude: '39.78', longitude: '-89.65' },
      timezone: { offset: '-6:00', description: 'Central Time' }
    },
    email: 'john.doe@example.com',
    login: { uuid: 'abc-123', username: 'johndoe', password: 'secret', salt: 's', md5: 'm', sha1: 's1', sha256: 's256' },
    dob: { date: '1990-01-15T00:00:00.000Z', age: 35 },
    registered: { date: '2015-06-01T00:00:00.000Z', age: 10 },
    phone: '555-1234',
    cell: '555-5678',
    id: { name: 'SSN', value: '123-45-6789' },
    picture: { large: 'https://randomuser.me/api/portraits/men/1.jpg', medium: 'https://randomuser.me/api/portraits/med/men/1.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/men/1.jpg' },
    nat: 'US'
  },
  {
    gender: 'female',
    name: { title: 'Ms', first: 'Jane', last: 'Smith' },
    location: {
      street: { number: 456, name: 'Oak Ave' },
      city: 'Portland',
      state: 'Oregon',
      country: 'United States',
      postcode: 97201,
      coordinates: { latitude: '45.52', longitude: '-122.68' },
      timezone: { offset: '-8:00', description: 'Pacific Time' }
    },
    email: 'jane.smith@example.com',
    login: { uuid: 'def-456', username: 'janesmith', password: 'pass', salt: 's2', md5: 'm2', sha1: 's12', sha256: 's2562' },
    dob: { date: '1985-03-22T00:00:00.000Z', age: 40 },
    registered: { date: '2010-01-10T00:00:00.000Z', age: 15 },
    phone: '555-9876',
    cell: '555-4321',
    id: { name: 'SSN', value: '987-65-4321' },
    picture: { large: 'https://randomuser.me/api/portraits/women/1.jpg', medium: 'https://randomuser.me/api/portraits/med/women/1.jpg', thumbnail: 'https://randomuser.me/api/portraits/thumb/women/1.jpg' },
    nat: 'US'
  }
];

describe('TablePeopleComponent', () => {
  let component: TablePeopleComponent;
  let fixture: ComponentFixture<TablePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablePeopleComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablePeopleComponent);
    component = fixture.componentInstance;
    component.people = MOCK_PEOPLE;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada persona', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.people.length);
  });

  it('debería mostrar los datos de la persona en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const person = component.people[index];

      expect(columns[1].nativeElement.textContent.trim()).toBe(`${person.name.first} ${person.name.last}`);
      expect(columns[2].nativeElement.textContent.trim()).toBe(person.email);
      expect(columns[3].nativeElement.textContent.trim()).toBe(person.phone);
      expect(columns[4].nativeElement.textContent.trim()).toBe(person.location.country);
    });
  });

  it('debería mapear cada género a su BadgeType correcto', () => {
    expect(component.genderMap['male']).toBe('primary');
    expect(component.genderMap['female']).toBe('danger');
  });
});
