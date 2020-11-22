import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent implements OnInit {

  listContacts: Contact[];
  loading = false;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(){
    this.loading = true;
    this.contactService.getListContacts().subscribe(data =>{
      this.loading = false;
      this.listContacts = data;
    })
  }

  delete(id: number){
    this.loading = true;
    this.contactService.deleteContact(id).subscribe(data =>{
      this.loadContact();
      this.loading = false;
    })
  }

}
