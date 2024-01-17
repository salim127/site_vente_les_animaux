
import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-do-contact',
  templateUrl: './do-contact.component.html',
  styleUrls: ['./do-contact.component.scss']
})
export class DoContactComponent {
  contacts: any[] = [];

  constructor(private monService: ServiceService) { }

  //get
  ngOnInit(): void {
    this.monService.getDonnees().subscribe(data => {
      this.contacts = data;
    });
  }


  //delete
  supprimer(id: number) {
    this.monService.supprimerDonnee(id).subscribe(
      response => {
       
  // Mettez à jour le tableau local en supprimant le contact avec l'ID spécifié
        this.contacts = this.contacts.filter(contact => contact.id !== id);
      },
      error => {
        console.error('Erreur lors de la suppression:', error);
      }
    );
  }



}
