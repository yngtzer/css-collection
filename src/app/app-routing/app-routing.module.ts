import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { SpinnerComponent } from '../spinner/spinner.component';
import { SquareLoadingComponent } from '../square-loading/square-loading.component';
import { FancyIntroductionComponent } from '../fancy-introduction/fancy-introduction.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'spinner', pathMatch: 'full'},
  { path: 'spinner', component: SpinnerComponent },
  { path: 'square-loading', component: SquareLoadingComponent },
  { path: 'fancy-introduction', component: FancyIntroductionComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
