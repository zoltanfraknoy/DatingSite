import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { TesterComponentComponent } from './components/tester-component/tester-component.component';
import { SigninComponentComponent } from './components/signin-component/signin-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { ContactComponentComponent } from './components/contact-component/contact-component.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    MainPageComponent,
    TesterComponentComponent,
    SigninComponentComponent,
    FooterComponentComponent,
    ContactComponentComponent,
    LoginComponentComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
