import { RegisterDto } from './../interfaces/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  registerDto!: RegisterDto

  formularioRegistro = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    correo: new FormControl('',[Validators.required,Validators.email])
  })

  constructor(private userService: ApiService) { }

  ngOnInit() {
  }



  guardar(){

    const formValue = this.formularioRegistro.value;

    // Validar y transformar los valores para cumplir con RegisterDto
    this.registerDto = {
      nombre: formValue.nombre || 'Nombre por defecto', // Proporciona un valor predeterminado si es null/undefined
      correo: formValue.correo || 'correo@defecto.com'  // Proporciona un valor predeterminado si es null/undefined
    };

    // this.userService.registrarUsuario(this.registerDto)
    this.userService.registrarUsuario(this.registerDto).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);
      },
      error: (error) => {
        console.error('Error al registrar usuario:', error);
      }
    });
  

    console.log(this.formularioRegistro.value)
    

  }


}
