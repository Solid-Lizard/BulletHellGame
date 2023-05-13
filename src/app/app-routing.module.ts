import { NgModule } from '@angular/core';
import { DownloadGameComponent } from './components/download-game/download-game.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RequerimentsComponent } from './components/requeriments/requeriments.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'download', component: DownloadGameComponent },
  { path: 'home', component: HomeComponent },
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
