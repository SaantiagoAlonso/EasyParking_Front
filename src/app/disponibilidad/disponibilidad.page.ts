import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-disponibilidad',
  templateUrl: './disponibilidad.page.html',
  styleUrls: ['./disponibilidad.page.scss'],
  standalone:false
})
export class DisponibilidadPage implements OnInit {

  parkingSpaces = [
    { name: 'A-1', type: 'Automóvil', available: true, vehicle: null, plate: null },
    { name: 'A-2', type: 'Automóvil', available: false, vehicle: 'Toyota Corolla', plate: 'ABC123' },
    { name: 'B-1', type: 'Motocicleta', available: true, vehicle: null, plate: null },
    { name: 'B-2', type: 'Motocicleta', available: false, vehicle: 'Honda CB500', plate: 'XYZ789' },
    { name: 'C-1', type: 'Camión', available: true, vehicle: null, plate: null },
    { name: 'C-2', type: 'Camión', available: false, vehicle: 'Volvo FH16', plate: 'DEF456' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
