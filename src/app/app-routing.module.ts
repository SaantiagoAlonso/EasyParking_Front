import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule),
    data: { animation: 'register' } // Opcional: para animaciones
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
    data: { animation: 'login' }
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    data: { animation: 'profile' }
  },
  {
    path: 'detalle-parking',
    loadChildren: () => import('./detalle-parking/detalle-parking.module').then(m => m.DetalleParkingPageModule)
  },
  {
    path: 'disponibilidad',
    loadChildren: () => import('./disponibilidad/disponibilidad.module').then(m => m.DisponibilidadPageModule)
  },
  // Ruta comodín para manejar 404 (opcional)
  {
    path: '**',
    redirectTo: 'register'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload' // ← Esto soluciona el error de activación
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
