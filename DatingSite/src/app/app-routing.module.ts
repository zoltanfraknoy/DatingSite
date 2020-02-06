import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { TesterComponentComponent } from './components/tester-component/tester-component.component';
import { MyProfileComponentComponent } from './components/my-profile-component/my-profile-component.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfilesComponent } from './components/profiles/profiles.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponentComponent },
  //for test!!!!
  { path: 'test', component: TesterComponentComponent },
  { path: 'myProfile', component: MyProfileComponentComponent },
  { path: 'profiles', component: ProfilesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
