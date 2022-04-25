import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SharedModule } from './modules/shared.module';
import { FormsModule } from '@angular/forms';
import { AppMaterailModule } from './modules/material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './_store/reducers';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    // Custom Modules
    SharedModule,
    AppMaterailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
