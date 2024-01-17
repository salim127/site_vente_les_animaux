package net.java.guides.springboot.model;

import jakarta.persistence.Entity;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="panier")
public class Panier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @OneToOne
    @JoinColumn(name = "produit_id") 
    private Produit produit;

    // Autres champs du panier (si nécessaire)

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Produit getProduit() {
        return produit;
    }

    public void setProduit(Produit produit) {
        this.produit = produit;
    }

    // Autres méthodes d'accès aux champs du panier

    public Panier(long id, Produit produit) {
        this.id = id;
        this.produit = produit;
    }

    public Panier() {
        // Constructeur par défaut
    }
}
