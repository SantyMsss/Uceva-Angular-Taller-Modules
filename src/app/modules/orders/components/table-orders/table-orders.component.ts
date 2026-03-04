import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Order, OrderStatus } from '../../interfaces/orders.interface';

@Component({
  selector: 'app-table-orders',
  templateUrl: './table-orders.component.html',
  standalone: false,
})
export class TableOrdersComponent {
  @Input() orders: Order[] = [];

  statusMap: Record<OrderStatus, BadgeType> = {
    'Pendiente': 'warning',
    'Enviado': 'info',
    'Entregado': 'success',
    'Cancelado': 'danger',
  }
}
