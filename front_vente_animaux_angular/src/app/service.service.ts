import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  private baseUrl = 'http://localhost:8008/api/contacts';

  private baseUrlProduit = 'http://localhost:8008/api/produits';

  private basePanier = 'http://localhost:8008/api/panier';

private baseUser ='http://localhost:8008/ApiUser';


  constructor(private http:HttpClient) { }
//getContact
  getDonnees(): Observable<any> {
    return this.http.get(this.baseUrl+"/afficher");
  }

  //ajouterContact
  createContact(contact:any):Observable<any> {
    return this.http.post(`${this.baseUrl}`, contact);
  }
  
  //deleteContact
  supprimerDonnee(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
//ajouter user
 createUser(user:any):Observable<any> {
    return this.http.post(`${this.baseUser}`, user);
  }

//getProduit
getProduit():Observable<any>{
  return this.http.get(this.baseUrlProduit);
}
//ajouterproduit
createProduit(produit: any): Observable<any> {
  return this.http.post(this.baseUrlProduit + "/ajouter", produit);
}
//supprimerproduit
supprimerproduit(id:number){
  return this.http.delete(`${this.baseUrlProduit}/${id}`);
}

//updateProduit
updateProduit(id: any, produit: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put(`${this.baseUrlProduit}/${id}`, produit, { headers });
}
//get by id

getProduitById(id: number): Observable<any> {
  return this.http.get<any>(`${this.baseUrlProduit}/${id}`);
}





//Getpanier crud pour panier

ajouterAuPanier(produitId: number): Observable<any> {
  return this.http.post(`${this.basePanier}/ajouter`, {produitId });
}
recupererPanier(): Observable<any> {
  return this.http.get(this.basePanier+"/afficher");
}

supprimerDuPanier(id: number): Observable<any> {
  return this.http.delete(`${this.basePanier}/${id}`);
}

}
