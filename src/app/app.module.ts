import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule }  from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';

var firebaseConfig = {
  apiKey: "AIzaSyC2QkSYQJArpv5RNMi-eV1YMdwKxujXQpA",
  authDomain: "teste-fe60e.firebaseapp.com",
  databaseURL: "https://teste-fe60e.firebaseio.com",
  projectId: "teste-fe60e",
  storageBucket: "teste-fe60e.appspot.com",
  messagingSenderId: "1090087591504",
  appId: "1:1090087591504:web:80df33692814499b"
};

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
