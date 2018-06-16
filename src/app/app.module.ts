import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routes
import { AppRoutingModule } from './app-routing/app-routing.module';

// MaterialUI
import { MaterialUIModule } from './material-ui/material-ui.module';

// Components
import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
<<<<<<< HEAD
import { SquareLoadingComponent } from './square-loading/square-loading.component';
=======
>>>>>>> c4b781cef7d037ddca1869d0550b8ecac3b5e91a

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
<<<<<<< HEAD
    SpinnerComponent,
    SquareLoadingComponent
=======
    SpinnerComponent
>>>>>>> c4b781cef7d037ddca1869d0550b8ecac3b5e91a
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialUIModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
