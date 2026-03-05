import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TablePeopleComponent } from './components/table-people/table-people.component';
import { ListPeopleComponent } from './pages/list-people/list-people.component';
import { PeopleRoutingModule } from './people-routing-module';
import { PeopleComponent } from './people.component';

@NgModule({
  declarations: [
    ListPeopleComponent,
    TablePeopleComponent,
    PeopleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
