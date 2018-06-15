import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { SpinnerComponent } from '../spinner/spinner.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'spinner', pathMatch: 'full'},
  { path: 'spinner', component: SpinnerComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
