import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { PartiePolComponent } from './components/partie-pol/partie-pol.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoMaterialModule } from './material-module';
import { ResultatComponent } from './resultat/resultat.component';

@NgModule({
  declarations: [
    AppComponent,
    PartiePolComponent,
    HeaderComponent,
    ResultatComponent
  ],
  imports: [
    DemoMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
