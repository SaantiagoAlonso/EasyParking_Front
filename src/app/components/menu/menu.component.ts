import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: false
})
export class MenuComponent  implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.componentes = this.apiService.getMenuOpts();
  }

}
