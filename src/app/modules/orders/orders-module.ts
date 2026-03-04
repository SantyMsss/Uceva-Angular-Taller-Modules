import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';
import { ListOrdersComponent } from './pages/list-orders/list-orders.component';
import { OrdersRoutingModule } from './orders-routing-module';
import { OrdersComponent } from './orders.component';

@NgModule({
  declarations: [
    ListOrdersComponent,
    TableOrdersComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
