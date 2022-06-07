import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './components/footer/footer.module';
import { NavbarModule } from './components/navbar/navbar.module';
import { HomeModule } from './components/home/home.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FooterModule,
    NavbarModule,
  ],
  providers: [
    LoginService,
    { provide: Window, useValue: window},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
