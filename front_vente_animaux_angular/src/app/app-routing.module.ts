import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { DoContactComponent } from './pages/do-contact/do-contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AjouterProduitComponent } from './pages/ajouter-produit/ajouter-produit.component';
import { ModifierproduitComponent } from './pages/modifierproduit/modifierproduit.component';
import { RegisterUComponent } from './pages/register-u/register-u.component';


const routes: Routes = [
{path:"", component : HomeComponent},
{path:"about" ,component:AboutComponent},
{path:"contact",component: ContactComponent},
{ path :"login" , component : LoginComponent},
{ path :"DoContact" , component : DoContactComponent},
{path: "dashbord", component :DashboardComponent },
{path: "produit",component:ProduitComponent},
{path:"panier",component:PanierComponent},
{path:"ajouterproduit",component:AjouterProduitComponent},
{path:"modifierproduit/:id",component:ModifierproduitComponent},
{path:"register",component:RegisterUComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
