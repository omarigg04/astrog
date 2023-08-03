import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AstroComponent } from './astro/astro.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'astro', component: AstroComponent },
  { path: 'music', component: MusicComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }