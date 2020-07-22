import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDashboardModule } from './passenger-dashboard/models/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular module
    BrowserModule,
    CommonModule,
    // custom module
    PassengerDashboardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {};
