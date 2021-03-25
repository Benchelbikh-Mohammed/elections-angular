import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiePolComponent } from './components/partie-pol/partie-pol.component';
import { ResultatComponent } from './components/resultat/resultat.component';
import { VoteComponent } from './components/vote/vote.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  {
    path: "partie-pol", component: PartiePolComponent
  },
  {
    path: "resultat", component: ResultatComponent
  },

  {
    path: "vote", component: VoteComponent, canActivate: [AuthGuard]
  },
  {
    path: "", redirectTo: "resultat", pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
