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
import { SquareLoadingComponent } from './square-loading/square-loading.component';
import { FancyIntroductionComponent } from './fancy-introduction/fancy-introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SpinnerComponent,
    SquareLoadingComponent,
    FancyIntroductionComponent
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
