import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TablePeopleComponent } from '../../components/table-people/table-people.component';
import { PeopleService } from '../../services/people.service';
import { ListPeopleComponent } from './list-people.component';
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
  }
];

describe('ListPeopleComponent', () => {
  let component: ListPeopleComponent;
  let fixture: ComponentFixture<ListPeopleComponent>;
  let peopleService: PeopleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPeopleComponent, TablePeopleComponent, BadgeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPeopleComponent);
    component = fixture.componentInstance;
    peopleService = TestBed.inject(PeopleService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllPeople al iniciar', () => {
    const spyGetAllPeople = jest.spyOn(peopleService, 'getAllPeople').mockReturnValue(of(MOCK_PEOPLE));
    fixture.detectChanges();
    expect(spyGetAllPeople).toHaveBeenCalled();
  });

  it('debería asignar las personas recibidas del servicio', () => {
    jest.spyOn(peopleService, 'getAllPeople').mockReturnValue(of(MOCK_PEOPLE));
    fixture.detectChanges();
    expect(component.people).toEqual(MOCK_PEOPLE);
  });

  it('debería pasar las personas al componente table-people', () => {
    jest.spyOn(peopleService, 'getAllPeople').mockReturnValue(of(MOCK_PEOPLE));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TablePeopleComponent))
      .componentInstance;
    expect(tableComponent.people).toEqual(MOCK_PEOPLE);
  });

  it('debería manejar el error cuando falla getAllPeople', () => {
    component.people = [];
    const errorResponse = new Error('Error al cargar personas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(peopleService, 'getAllPeople').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(peopleService.getAllPeople).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.people.length).toBe(0);
  });
});
