import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-voir-details',
  templateUrl: './voir-details.component.html',
  styleUrls: ['./voir-details.component.css']
})
export class VoirDetailsComponent implements OnInit {

  loading = false;
  contact: Contact;
  idContact: number;

  constructor(private contactService: ContactService, private route: ActivatedRoute) {
    this.idContact = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.loadContact();
  }

  loadContact(){
    this.loading = true;
    this.contactService.loadContact(this.idContact).subscribe(data => {
      this.loading = false;
      this.contact = data;
    })
  }

}
