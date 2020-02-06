import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import { from } from 'rxjs';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent },
  { path: 'registration', component: MainPageComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
