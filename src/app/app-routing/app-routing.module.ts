import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { SpinnerComponent } from '../spinner/spinner.component';
<<<<<<< HEAD
import { SquareLoadingComponent } from '../square-loading/square-loading.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'spinner', pathMatch: 'full'},
  { path: 'spinner', component: SpinnerComponent },
  { path: 'square-loading', component: SquareLoadingComponent }
=======

const appRoutes: Routes = [
  { path: '', redirectTo: 'spinner', pathMatch: 'full'},
  { path: 'spinner', component: SpinnerComponent }
>>>>>>> c4b781cef7d037ddca1869d0550b8ecac3b5e91a
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
