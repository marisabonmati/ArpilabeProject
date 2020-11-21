import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterEditerContactComponent } from './components/ajouter-editer-contact/ajouter-editer-contact.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { VoirDetailsComponent } from './components/voir-details/voir-details.component';

const routes: Routes = [
  {path: 'ajouter', component: AjouterEditerContactComponent},
  {path: 'editer/:id', component: AjouterEditerContactComponent},
  {path: 'voir/:id', component: VoirDetailsComponent},
  {path: '', component: ListContactsComponent, pathMatch: 'full'},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
