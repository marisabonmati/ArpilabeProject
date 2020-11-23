import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterEditerContactComponent } from './components/ajouter-editer-contact/ajouter-editer-contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { VoirDetailsComponent } from './components/voir-details/voir-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterEditerContactComponent,
    NavbarComponent,
    ListContactsComponent,
    VoirDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
