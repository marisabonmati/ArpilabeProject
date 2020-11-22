import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-ajouter-editer-contact',
  templateUrl: './ajouter-editer-contact.component.html',
  styleUrls: ['./ajouter-editer-contact.component.css']
})

export class AjouterEditerContactComponent implements OnInit {

  contact: FormGroup;
  idContact = 0;
  action = 'Ajouter';
  loading = false;
  contacter: Contact;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private contactService: ContactService, private router: Router) {
    this.contact = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateDeNaissance: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
      note: ['', Validators.required],
      departement: ['', Validators.required],
    });

    if (+this.route.snapshot.paramMap.get('id')! > 0) {
      this.idContact = +this.route.snapshot.paramMap.get('id')!;
    }

  }


  ngOnInit(): void {
    this.esEditer();
  }

  sauvgarderContact() {
    if (this.action === "Ajouter") {
      const contact: Contact = {
        dateDeNaissance: this.contact.get('dateDeNaissance').value,  // jour de création :S
        nom: this.contact.get('nom').value,
        prenom: this.contact.get('prenom').value,
        departement: this.contact.get('departement').value,
        note: this.contact.get('note').value,
        email: this.contact.get('email').value,
        telephone: this.contact.get('telephone').value,
      };

      this.contactService.saveContact(contact).subscribe(data => {
        this.router.navigate(['/']);
      });

    } else {
      const contact: Contact = {
        id: this.idContact,
        dateDeNaissance: this.contact.get('dateDeNaissance').value,
        nom: this.contact.get('nom').value,
        prenom: this.contact.get('prenom').value,
        departement: this.contact.get('departement').value,
        note: this.contact.get('note').value,
        email: this.contact.get('email').value,
        telephone: this.contact.get('telephone').value,
      };
      this.contactService.editContact(this.idContact, contact).subscribe(data => {
        this.router.navigate(['/']);
      });
    }
    console.log(this.contact);
  }

  esEditer() {
    if (this.idContact > 0) {
      this.action = 'Editer';
      this.contactService.loadContact(this.idContact).subscribe(data => {
        this.contacter = data;
        this.contact.patchValue({
          nom: data.nom,
          prenom: data.prenom,
          dateDeNaissance: data.dateDeNaissance,
          telephone: data.telephone,
          email: data.email,
          departement: data.departement,
          note: data.note
        });
      });
    }
  }

}
