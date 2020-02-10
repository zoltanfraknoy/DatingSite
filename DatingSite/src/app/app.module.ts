import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TesterComponentComponent } from './components/tester-component/tester-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {InfoLineComponent} from './components/info-line/info-line.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ModifyUserModalComponent } from './components/modify-user-modal/modify-user-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainPageComponent,
    TesterComponentComponent,
    FooterComponentComponent,
    ContactComponentComponent,
    LoginComponentComponent,
    RegistrationComponent,
    ErrorPageComponent,
    ProfileComponentComponent,
    InfoLineComponent,
    ProfilesComponent,
    ModifyUserModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
