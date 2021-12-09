import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchaakbordComponent } from './components/schaakbord/schaakbord.component';
import { StukComponent } from './components/stuk/stuk.component';

@NgModule({
  declarations: [
    AppComponent,
    SchaakbordComponent,
    StukComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
