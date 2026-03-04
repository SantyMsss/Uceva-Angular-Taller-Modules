import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ORDERS } from '../../../../core/config/orders.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableOrdersComponent } from './table-orders.component';

describe('TableOrdersComponent', () => {
  let component: TableOrdersComponent;
  let fixture: ComponentFixture<TableOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOrdersComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableOrdersComponent);
    component = fixture.componentInstance;
    component.orders = ORDERS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada pedido', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.orders.length);
  });

  it('debería mostrar los datos del pedido en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const order = component.orders[index];
      const orderTotal = new CurrencyPipe('en-US').transform(order.total);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(order.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(order.customer);
      expect(columns[2].nativeElement.textContent.trim()).toBe(order.product);
      expect(columns[3].nativeElement.textContent.trim()).toBe(String(order.quantity));
      expect(columns[4].nativeElement.textContent.trim()).toBe(orderTotal);
      expect(columns[5].nativeElement.textContent.trim()).toBe(order.status);
    });
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Pendiente']).toBe('warning');
    expect(component.statusMap['Enviado']).toBe('info');
    expect(component.statusMap['Entregado']).toBe('success');
    expect(component.statusMap['Cancelado']).toBe('danger');
  });
});
