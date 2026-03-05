import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { PeopleService } from './people.service';
import { Person, RandomUserResponse } from '../interfaces/people.interface';

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

describe('PeopleService', () => {
  let service: PeopleService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(PeopleService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllPeople debería retornar un observable con las personas', (done) => {
    const mockResponse: RandomUserResponse = {
      results: MOCK_PEOPLE,
      info: { seed: 'test', results: 1, page: 1, version: '1.4' }
    };

    service.getAllPeople().subscribe(people => {
      expect(people).toEqual(MOCK_PEOPLE);
      expect(people.length).toBe(1);
      done();
    });

    const req = httpTesting.expectOne('https://randomuser.me/api/?results=10');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
