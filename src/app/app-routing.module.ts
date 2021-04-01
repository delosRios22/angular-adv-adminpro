import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';



import { DashboardComponent } from '../app/pages/dashboard/dashboard.component';
import { LoginComponent } from '../app/auth/login/login.component';
import { RegisterComponent } from '../app/auth/register/register.component';
import { ProgressComponent } from '../app/pages/progress/progress.component';
import { Grafica1Component } from '../app/pages/grafica1/grafica1.component';
import { NopagesfoundComponent } from '../app/pages/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';

const routes : Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'grafica1', component: Grafica1Component },
      { path: '', pathMatch:'full', redirectTo: '/dashboard' },
    ]
  },

  

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  
  { path: '**', component: NopagesfoundComponent },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

