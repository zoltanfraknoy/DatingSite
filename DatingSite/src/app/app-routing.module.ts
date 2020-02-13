import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { TesterComponentComponent } from './components/tester-component/tester-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { MessagesComponentComponent } from './components/messages-component/messages-component.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'login/authError', component: LoginComponentComponent },
  //for test!!!!
  { path: 'test', component: TesterComponentComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'messages', component: MessagesComponentComponent },
  {
    path: 'profiles',
    children: [
      { path: 'myProfile', component: ProfileComponentComponent, data: { kind: 'ownProfile' } },
      { path: 'profile/:id', component: ProfileComponentComponent, data: { kind: 'othersProfile' } },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
