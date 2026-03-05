import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPeopleComponent } from './pages/list-people/list-people.component';

const routes: Routes = [
  { path: 'list-people', component: ListPeopleComponent },
  { path: '**', redirectTo: 'list-people' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
