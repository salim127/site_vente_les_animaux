import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  url1 :String="http://localhost:8099/ApiUser/singIn";
  email:any;
  mdp:any;
  result: any;



  ngOnInit() {
  }

  constructor(private http: HttpClient,
    private _route :Router ) {}

   // login.component.ts
// ...

login() {
  return this.http.get('http://localhost:8008/ApiUser/singIn?email=' + this.email + '&mdp=' + this.mdp)
    .subscribe(
      (rep: any) => {
        console.log(rep);

        // Assurez-vous que rep contient le rôle
        const role = rep?.role;

        if (role === 'admin') {
          // Rediriger l'admin vers une page spécifique pour les administrateurs
          this._route.navigate(['/dashbord']);
        } else {
          // Rediriger les utilisateurs normaux vers la page de tableau de bord
          this._route.navigate(['/']);
        }
      },
      (error: any) => {
        console.error('Error:', error);

        // Ajoutez cette partie pour obtenir des informations détaillées sur l'erreur
        if (error instanceof HttpErrorResponse) {
          console.error('Status:', error.status);
          console.error('Response body:', error.error);
        }
      }
    );
}




  vide(){
    this.email = "";
    this.mdp = "";
  }
  

}
