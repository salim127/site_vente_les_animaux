import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  produits:any[]=[]
  constructor(private service :ServiceService){}

  //get
  ngOnInit():void{
    this.service.getProduit().subscribe(data=>{ this.produits=data; 
    });
}


//pour le panier

acheterProduit(produitId: number): void {
  this.service.ajouterAuPanier(produitId).subscribe(
    () => {
      console.log('Produit ajouté au panier avec succès.');
      // Ajoutez ici la logique pour afficher un message à l'utilisateur si nécessaire.
    },
    (error) => {
      console.error('Erreur lors de l\'ajout du produit au panier', error);
    }
  );
  
  
}




}
