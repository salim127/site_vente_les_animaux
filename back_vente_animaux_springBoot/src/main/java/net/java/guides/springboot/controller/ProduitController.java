package net.java.guides.springboot.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import net.java.guides.springboot.model.Produit;
import net.java.guides.springboot.repository.ProduitRepository;

@RestController
@RequestMapping("api/produits")
public class ProduitController {

    @Autowired
    ProduitRepository produitRepository;

    @GetMapping
    public List<Produit> getProduits() {
        return produitRepository.findAll();
    }

    @PostMapping("/ajouter")
    public Produit createProduit(@RequestBody Produit produit) {
        return produitRepository.save(produit);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduit(@PathVariable long id) {
        produitRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    // Ajout de la méthode pour la mise à jour (update)
    @PutMapping("/{id}")
    public ResponseEntity<Produit> updateProduit(@PathVariable long id, @RequestBody Produit updatedProduit) {
        Optional<Produit> existingProduitOptional = produitRepository.findById(id);

        if (existingProduitOptional.isPresent()) {
            Produit existingProduit = existingProduitOptional.get();
            existingProduit.setImage(updatedProduit.getImage());
            existingProduit.setAge(updatedProduit.getAge());
            existingProduit.setPrix(updatedProduit.getPrix());

            Produit updatedProduitEntity = produitRepository.save(existingProduit);
            return ResponseEntity.ok(updatedProduitEntity);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    @GetMapping("{id}")
	public ResponseEntity<Produit> getProduitById(@PathVariable long id) {
    	Produit produit = produitRepository.findById(id)
	    .orElseThrow();
	    return ResponseEntity.ok(produit);
	}
}
