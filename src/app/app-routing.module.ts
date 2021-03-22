import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartiePolComponent } from './components/partie-pol/partie-pol.component';



const routes: Routes = [
  {
    path: "partie-pol", component: PartiePolComponent
  },
  {
    path: "", redirectTo: "partie-pol", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
