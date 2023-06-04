import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { RequerimentsComponent } from './components/requeriments/requeriments.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DownloadGameComponent } from './components/download-game/download-game.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageSuccessComponent } from './components/message-success/message-success.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotPermissionsComponent } from './components/not-permissions/not-permissions.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CharacteristicsComponent,
    RequerimentsComponent,
    AboutUsComponent,
    NotFoundComponent,
    DownloadGameComponent,
    SocialMediaComponent,
    ContactFormComponent,
    MessageSuccessComponent,
    MessageErrorComponent,
    LoginComponent,
    SignupComponent,
    NotPermissionsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
