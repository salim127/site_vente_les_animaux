import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss']
})
export class ProduitComponent implements OnInit {

  produits: any[] = [];
  produit: any = {}; // Les détails du produit à mettre à jour
  produitId: number = 1; // Remplacez par l'ID du produit à mettre à jour
  routee: any;

  constructor(private service: ServiceService , private router:Router ) {}

  ngOnInit(): void {
    this.loadProduits();
  }

  loadProduits() {
    this.service.getProduit().subscribe(data => {
      this.produits = data;
    });
  }

  supprimer(id: number) {
    this.service.supprimerproduit(id).subscribe(
      response => {
        // Mettez à jour le tableau local en supprimant le produit avec l'ID spécifié
        this.produits = this.produits.filter(produit => produit.id !== id);
      },
      error => {
        console.error('Erreur lors de la suppression:', error);
      }
    );
  }

  modifier(id: number) {
    // Redirigez l'utilisateur vers la page de modification avec l'ID du produit
    this.router.navigate(['/modifierproduit', id]);
  }

}
