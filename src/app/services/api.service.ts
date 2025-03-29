import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente, RegisterDto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/user/registrar'; // URL del backend

  constructor(private http: HttpClient) { }

  registrarUsuario(datos: RegisterDto){
    return this.http.post(this.apiUrl, datos); // Envía los datos al backend
  }

// Opciones del menu
  getMenuOpts(){
    return this.http.get<Componente[]>('assets/data/menu.json')
  } 

}
