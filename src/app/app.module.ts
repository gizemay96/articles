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

import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(rootReducer: any) {
  return localStorageSync({ keys: ['articles'], rehydrate: true })(rootReducer);
}
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
      metaReducers: [localStorageSyncReducer],
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
