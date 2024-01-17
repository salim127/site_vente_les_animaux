// modifierproduit.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-modifierproduit',
  templateUrl: './modifierproduit.component.html',
  styleUrls: ['./modifierproduit.component.scss']
})
export class ModifierproduitComponent implements OnInit {
  id: any;
  produit: any;

  constructor(private service: ServiceService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.service.getProduitById(this.id).subscribe(data => {
      this.produit = data;
    });
  }

  onSubmit() {
    this.service.updateProduit(this.id, this.produit).subscribe(
      data => {
        console.log(data);
        alert('Produit mis à jour avec succès!');
        this.router.navigate(['/produit']);
      },
      error => {
        console.error('Error updating produit:', error);
        // Handle error appropriately (e.g., show error message)
      }
    );
  }
}
