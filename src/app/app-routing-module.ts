import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./modules/orders/orders-module').then(m => m.OrdersModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./modules/courses/courses-module').then(m => m.CoursesModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./modules/people/people-module').then(m => m.PeopleModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./modules/countries/countries-module').then(m => m.CountriesModule)
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
