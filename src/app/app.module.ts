import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AstroComponent } from './astro/astro.component';
import { MusicComponent } from './music/music.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AstroComponent,
    MusicComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }