import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { CountriesService } from './countries.service';
import { Country } from '../interfaces/countries.interface';

const MOCK_COUNTRIES: Country[] = [
  {
    name: { common: 'Colombia', official: 'Republic of Colombia' },
    capital: ['Bogotá'],
    region: 'Americas',
    population: 50882891,
    languages: { spa: 'Spanish' },
    flags: { png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg', alt: 'Colombia flag' },
    cca3: 'COL'
  },
  {
    name: { common: 'Germany', official: 'Federal Republic of Germany' },
    capital: ['Berlin'],
    region: 'Europe',
    population: 83240525,
    languages: { deu: 'German' },
    flags: { png: 'https://flagcdn.com/w320/de.png', svg: 'https://flagcdn.com/de.svg', alt: 'Germany flag' },
    cca3: 'DEU'
  }
];

describe('CountriesService', () => {
  let service: CountriesService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(CountriesService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllCountries debería retornar un observable con los países', (done) => {
    service.getAllCountries().subscribe(countries => {
      expect(countries).toEqual(MOCK_COUNTRIES);
      expect(countries.length).toBe(2);
      done();
    });

    const req = httpTesting.expectOne('https://restcountries.com/v3.1/all?fields=name,capital,region,population,languages,flags,cca3');
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_COUNTRIES);
  });
});
