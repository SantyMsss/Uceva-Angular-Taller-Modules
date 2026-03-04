import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';

const routes: Routes = [
  { path: 'list-orders', component: ListOrdersComponent },
  { path: '**', redirectTo: 'list-orders' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
