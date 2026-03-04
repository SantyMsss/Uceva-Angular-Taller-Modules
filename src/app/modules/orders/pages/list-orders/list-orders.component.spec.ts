import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { ORDERS } from '../../../../core/config/orders.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableOrdersComponent } from '../../components/table-orders/table-orders.component';
import { OrdersService } from '../../services/orders.service';
import { ListOrdersComponent } from './list-orders.component';

describe('ListOrdersComponent', () => {
  let component: ListOrdersComponent;
  let fixture: ComponentFixture<ListOrdersComponent>;
  let ordersService: OrdersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOrdersComponent, TableOrdersComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdersComponent);
    component = fixture.componentInstance;
    ordersService = TestBed.inject(OrdersService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllOrders al iniciar', () => {
    const spyGetAllOrders = jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));
    fixture.detectChanges();
    expect(spyGetAllOrders).toHaveBeenCalled();
  });

  it('debería asignar los pedidos recibidos del servicio', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));
    fixture.detectChanges();
    expect(component.orders).toEqual(ORDERS);
  });

  it('debería pasar los pedidos al componente table-orders', () => {
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(of(ORDERS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableOrdersComponent))
      .componentInstance;
    expect(tableComponent.orders).toEqual(ORDERS);
  });

  it('debería manejar el error cuando falla getAllOrders', () => {
    component.orders = [];
    const errorResponse = new Error('Error al cargar pedidos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(ordersService, 'getAllOrders').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(ordersService.getAllOrders).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.orders.length).toBe(0);
  });
});
