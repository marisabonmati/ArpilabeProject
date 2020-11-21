import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ajouter-editer-contact',
  templateUrl: './ajouter-editer-contact.component.html',
  styleUrls: ['./ajouter-editer-contact.component.css']
})

export class AjouterEditerContactComponent implements OnInit {

  contact: FormGroup;
  idContact = 0;
  action = 'Ajouter un contact';

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
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

  sauvgarderContact(){
    console.log(this.contact);
  }

  esEditer() {
    if (this.idContact > 0) {
      this.action = 'Éditer le contact';
      this.contact.patchValue({
        nom: 'Bonmati',
        prenom: 'Marisa',
        dateDeNaissance: '17/04/90',
        telephone: '333333333',
        email: 'hola@hola.com',
        departement: 'IT',
        note: 'ok'
      })
    }
  }

}
