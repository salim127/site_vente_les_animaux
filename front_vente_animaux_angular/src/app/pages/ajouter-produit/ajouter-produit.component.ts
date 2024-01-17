import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.scss']
})
export class AjouterProduitComponent {

  produit = {
    image: 'assets/img/',
    prix: '',
    age: ''
  };

  constructor(private service :ServiceService, private router:Router){}

  goToContactList(){
    this.router.navigate(['/produit']);
}

onSubmit(){
this.service.createProduit(this.produit).subscribe(data=>{
  console.log(data);
  alert('produit ajouté avec succès!');
})
this.goToContactList();
}






}
