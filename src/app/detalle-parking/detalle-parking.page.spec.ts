import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleParkingPage } from './detalle-parking.page';

describe('DetalleParkingPage', () => {
  let component: DetalleParkingPage;
  let fixture: ComponentFixture<DetalleParkingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleParkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
