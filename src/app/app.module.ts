import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsComponent } from './films/films.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './films/detail/detail.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { FormulaireComponent } from './films/formulaire/formulaire.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './films/update/update.component';
import { PersonFormComponent } from './films/person-form/person-form.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { PersFormComponent } from './intervenant/pers-form/pers-form.component';
import { PersUpdateComponent } from './intervenant/pers-update/pers-update.component';
import { PersDetailComponent } from './intervenant/pers-detail/pers-detail.component';
import { GenreFormComponent } from './films/detail/genre-form/genre-form.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    DetailComponent,
    FormulaireComponent,
    UpdateComponent,
    PersonFormComponent,
    IntervenantComponent,
    PersFormComponent,
    PersUpdateComponent,
    PersDetailComponent,
    GenreFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
