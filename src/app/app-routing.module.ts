import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CompetencesComponent } from './competences/competences.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
 {path:'',component:AccueilComponent},  
 {path:'accueil',component:AccueilComponent},  
 {path:'contact',component:ContactComponent}, 
 {path:'competences',component:CompetencesComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
