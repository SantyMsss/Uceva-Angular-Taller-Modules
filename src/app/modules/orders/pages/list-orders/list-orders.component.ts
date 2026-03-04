import { Component, inject, OnInit } from '@angular/core';
import { Order } from '../../interfaces/orders.interface';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-list-orders',
  template: `<app-table-orders [orders]="orders" ></app-table-orders>`,
  standalone: false,
})
export class ListOrdersComponent implements OnInit {
  orders: Order[] = [];
  private ordersService = inject(OrdersService);

  ngOnInit(): void {
    this.ordersService.getAllOrders().subscribe({
      next: (orders) => this.orders = orders,
      error: (error) => console.error(error),
    })
  }
}
