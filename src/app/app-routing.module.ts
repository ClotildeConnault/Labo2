import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './films/detail/detail.component';
import { GenreFormComponent } from './films/detail/genre-form/genre-form.component';
import { FilmsComponent } from './films/films.component';
import { FormulaireComponent } from './films/formulaire/formulaire.component';
import { PersonFormComponent } from './films/person-form/person-form.component';
import { UpdateComponent } from './films/update/update.component';
import { IntervenantComponent } from './intervenant/intervenant.component';
import { PersDetailComponent } from './intervenant/pers-detail/pers-detail.component';
import { PersFormComponent } from './intervenant/pers-form/pers-form.component';
import { PersUpdateComponent } from './intervenant/pers-update/pers-update.component';

const routes: Routes = [
  { path:'',
    component: FilmsComponent,
    children: [{
    path: 'detail/:id',
    component: DetailComponent,
    children: [{
      path: 'detail/add/:id',
      component: GenreFormComponent
    }]
    },
  {
  path: 'ajout',
  component: FormulaireComponent
  },
 
  {
  path: 'update/:id',
  component: UpdateComponent
  },

  {
    path: 'intervenants/:id',
    component: PersonFormComponent
    },

  ],
  runGuardsAndResolvers: 'always'

},

{
  path: 'films',
  component: FilmsComponent
},

{
  path: 'int',
  component: IntervenantComponent,
    children: [{
      path: 'int/detail/:id',
      component: PersDetailComponent
      },
    {
    path: 'int/ajout',
    component: PersFormComponent
    },
   
    {
    path: 'int/update/:id',
    component: PersUpdateComponent
    }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
