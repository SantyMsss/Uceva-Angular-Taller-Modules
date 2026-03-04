import { TestBed } from '@angular/core/testing';
import { ORDERS } from '../../../core/config/orders.config';
import { OrdersService } from './orders.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllOrders debería retornar un observable con los pedidos', (done) => {
    service.getAllOrders().subscribe(orders => {
      expect(orders).toEqual(ORDERS);
      expect(orders.length).toBe(ORDERS.length);
      done();
    });
  });
});
