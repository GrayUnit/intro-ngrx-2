import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMatiereComponent } from './add-matiere/add-matiere.component';
import { MatiereComponent } from './matiere/matiere.component';

const routes: Routes = [
  { path: '', redirectTo: '/matiere', pathMatch: 'full' },
  { path: 'matiere', component: MatiereComponent },
  { path: 'add-matiere', component: AddMatiereComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
