import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchaakbordComponent } from './components/schaakbord/schaakbord.component';
import { StukComponent } from './components/stuk/stuk.component';
import { SpelComponent } from './components/spel/spel.component';
import { LandingComponent } from './components/landing/landing.component';
import { CommonModule } from '@angular/common';
import { VakComponent } from './components/vak/vak.component';

@NgModule({
  declarations: [
    AppComponent,
    SchaakbordComponent,
    StukComponent,
    SpelComponent,
    LandingComponent,
    VakComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
