import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DoContactComponent } from './pages/do-contact/do-contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AjouterProduitComponent } from './pages/ajouter-produit/ajouter-produit.component';
import { ModifierproduitComponent } from './pages/modifierproduit/modifierproduit.component';
import { RegisterUComponent } from './pages/register-u/register-u.component';


@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    DoContactComponent,
    DashboardComponent,
    ProduitComponent,
    PanierComponent,
    AjouterProduitComponent,
    ModifierproduitComponent,
    RegisterUComponent,
   
 
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    
    RouterModule.forRoot([]),
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
