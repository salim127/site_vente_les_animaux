import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit{
  

  panier: any[] = [];

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    this.getPanier();
  }

  getPanier(): void {
    this.service.recupererPanier().subscribe(
      (data: any[]) => {
        console.log('Données du panier :', data);
        this.panier = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération du panier', error);
      }
    );
  }

  supprimerDuPanier(id: number): void {
    this.service.supprimerDuPanier(id).subscribe(() => {
      this.getPanier(); // Mettez à jour le panier après la suppression
    });
  }

}
