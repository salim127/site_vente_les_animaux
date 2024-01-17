import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent  {

  contact = {
    nom: '',
    email: '',
    message: ''
  };


  constructor(private service : ServiceService,
              private router:Router){}


goToContactList(){
  this.router.navigate(['/']);

}
    onSubmit() {
      this.service.createContact(this.contact).subscribe(data => {
        console.log(data);
        alert('Contact ajouté avec succès!');
 });
 this.goToContactList();

    }

  }


