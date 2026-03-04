import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableCoursesComponent } from './components/table-courses/table-courses.component';
import { ListCoursesComponent } from './pages/list-courses/list-courses.component';
import { CoursesRoutingModule } from './courses-routing-module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    ListCoursesComponent,
    TableCoursesComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
