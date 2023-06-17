import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LaggTillRecepetComponent } from './lagg-till-recepet/lagg-till-recepet.component';
import { LaggTillIngridienserComponent } from './lagg-till-ingridienser/lagg-till-ingridienser.component';

@NgModule({
  declarations: [
    AppComponent,
    LaggTillRecepetComponent,
    LaggTillIngridienserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
