import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SpelComponent } from './components/spel/spel.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'spel', component: SpelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
