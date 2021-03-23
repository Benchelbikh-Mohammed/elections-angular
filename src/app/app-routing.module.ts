import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiePolComponent } from './components/partie-pol/partie-pol.component';
import { ResultatComponent } from './components/resultat/resultat.component';


const routes: Routes = [
  {
    path: "partie-pol", component: PartiePolComponent
  },
  {
    path: "resultat", component: ResultatComponent
  },
  {
    path: "", redirectTo: "partie-pol", pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
