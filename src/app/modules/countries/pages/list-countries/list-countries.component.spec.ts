import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableCountriesComponent } from '../../components/table-countries/table-countries.component';
import { CountriesService } from '../../services/countries.service';
import { ListCountriesComponent } from './list-countries.component';
import { Country } from '../../interfaces/countries.interface';

const MOCK_COUNTRIES: Country[] = [
  {
    name: { common: 'Colombia', official: 'Republic of Colombia' },
    capital: ['Bogotá'],
    region: 'Americas',
    population: 50882891,
    languages: { spa: 'Spanish' },
    flags: { png: 'https://flagcdn.com/w320/co.png', svg: 'https://flagcdn.com/co.svg', alt: 'Colombia flag' },
    cca3: 'COL'
  }
];

describe('ListCountriesComponent', () => {
  let component: ListCountriesComponent;
  let fixture: ComponentFixture<ListCountriesComponent>;
  let countriesService: CountriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCountriesComponent, TableCountriesComponent, BadgeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCountriesComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllCountries al iniciar', () => {
    const spyGetAllCountries = jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    fixture.detectChanges();
    expect(spyGetAllCountries).toHaveBeenCalled();
  });

  it('debería asignar los países recibidos del servicio', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    fixture.detectChanges();
    expect(component.countries).toEqual(MOCK_COUNTRIES);
  });

  it('debería pasar los países al componente table-countries', () => {
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(of(MOCK_COUNTRIES));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableCountriesComponent))
      .componentInstance;
    expect(tableComponent.countries).toEqual(MOCK_COUNTRIES);
  });

  it('debería manejar el error cuando falla getAllCountries', () => {
    component.countries = [];
    const errorResponse = new Error('Error al cargar países');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(countriesService, 'getAllCountries').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(countriesService.getAllCountries).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.countries.length).toBe(0);
  });
});
