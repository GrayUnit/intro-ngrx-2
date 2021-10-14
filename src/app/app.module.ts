import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appEffects, rootReducer } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddMatiereComponent,
    MatiereComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      name: '[TEST NGRX]',
      maxAge: 25
    }),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
