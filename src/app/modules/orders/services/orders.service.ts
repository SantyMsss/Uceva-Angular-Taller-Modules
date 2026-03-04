import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ORDERS } from '../../../core/config/orders.config';
import { Order } from '../interfaces/orders.interface';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  getAllOrders(): Observable<Order[]> {
    return of(ORDERS);
  }
}
