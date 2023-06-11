import { NgModule } from '@angular/core';
import { DownloadGameComponent } from './components/download-game/download-game.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RequerimentsComponent } from './components/requeriments/requeriments.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MessageSuccessComponent } from './components/message-success/message-success.component';
import { MessageErrorComponent } from './components/message-error/message-error.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ResetPasswordRequestComponent } from './components/reset-password-request/reset-password-request.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AdminBoardComponent } from './components/admin-board/admin-board.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'download', component: DownloadGameComponent },
  { path: 'contact', component: ContactFormComponent},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'message-success', component:MessageSuccessComponent },
  { path: 'message-error', component:MessageErrorComponent},
  { path: 'reset-password-request', component: ResetPasswordRequestComponent },
  { path: 'reset-password', component:ResetPasswordComponent },
  { path: 'admin-board', component:AdminBoardComponent},
  { path: '', component:HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'requirements', component: RequerimentsComponent },
  { path: 'social-media', component:  SocialMediaComponent},
  { path: 'our-game', component: CharacteristicsComponent }, 
  { path: '404', component: NotFoundComponent }, 
  { path: '**', redirectTo: '404' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
