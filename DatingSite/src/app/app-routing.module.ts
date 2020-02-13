import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { TesterComponentComponent } from './components/tester-component/tester-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { MessagesComponentComponent } from './components/messages-component/messages-component.component';
import { ModifyUserModalComponent } from './components/modify-user-modal/modify-user-modal.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'main' },
  { path: 'main', component: MainPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'login/loggedOut', component: LoginComponentComponent, data: { showLoggedOutMessage: true } },
  { path: 'login/signUpSuccess', component: LoginComponentComponent, data: { showSignUpMessage: true } },
  //for test!!!!
  { path: 'test', component: TesterComponentComponent },
  { path: 'contact', component: ContactComponentComponent },
  { path: 'messages', component: MessagesComponentComponent },
  {
    path: 'profiles',
    component: ProfilesComponent,
  },
  { path: 'profiles/myProfile', component: ProfileComponentComponent, data: { kind: 'ownProfile' } },
  { path: 'profiles/:id', component: ProfileComponentComponent, data: { kind: 'othersProfile' } },
  { path: 'modify', component: ModifyUserModalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
