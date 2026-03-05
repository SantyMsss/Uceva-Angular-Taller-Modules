import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TableCountriesComponent } from './table-countries.component';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
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

describe('TableCountriesComponent', () => {
  let component: TableCountriesComponent;
  let fixture: ComponentFixture<TableCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCountriesComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCountriesComponent);
    component = fixture.componentInstance;
    component.countries = MOCK_COUNTRIES;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada país', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.countries.length);
  });

  it('debería mostrar los datos del país en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const country = component.countries[index];

      expect(columns[1].nativeElement.textContent.trim()).toBe(country.name.common);
      expect(columns[2].nativeElement.textContent.trim()).toBe(country.capital?.[0] ?? 'N/A');
    });
  });

  it('debería mapear cada región a su BadgeType correcto', () => {
    expect(component.regionMap['Africa']).toBe('warning');
    expect(component.regionMap['Americas']).toBe('success');
    expect(component.regionMap['Asia']).toBe('danger');
    expect(component.regionMap['Europe']).toBe('primary');
    expect(component.regionMap['Oceania']).toBe('info');
    expect(component.regionMap['Antarctic']).toBe('secondary');
  });

  it('debería obtener los idiomas como cadena separada por comas', () => {
    expect(component.getLanguages({ spa: 'Spanish', eng: 'English' })).toBe('Spanish, English');
    expect(component.getLanguages(undefined)).toBe('N/A');
  });
});
