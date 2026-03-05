import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableCountriesComponent } from './components/table-countries/table-countries.component';
import { ListCountriesComponent } from './pages/list-countries/list-countries.component';
import { CountriesRoutingModule } from './countries-routing-module';
import { CountriesComponent } from './countries.component';

@NgModule({
  declarations: [
    ListCountriesComponent,
    TableCountriesComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
