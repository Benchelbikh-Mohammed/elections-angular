import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppService } from './services/app.service';
import { AppRoutingModule } from './app-routing.module';
import { PartiePolComponent } from './components/partie-pol/partie-pol.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoMaterialModule } from './material-module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ResultatComponent } from './components/resultat/resultat.component';
import { VoteComponent } from './components/vote/vote.component';

const config = {
  apiKey: "AIzaSyDtn81w_9w0ZUGKFcixgc-WxY-Cj0Ea9Yc",
  authDomain: "angular-election-app.firebaseapp.com",
  projectId: "angular-election-app",
  storageBucket: "angular-election-app.appspot.com",
  messagingSenderId: "414031097723",
  appId: "1:414031097723:web:cc4e0296e56e97b39497de",
  measurementId: "G-RDVPZZRJV7"
};

@NgModule({
  declarations: [
    AppComponent,
    PartiePolComponent,
    HeaderComponent,
    ResultatComponent,
    VoteComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    DemoMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
