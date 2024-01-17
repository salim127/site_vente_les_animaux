package net.java.guides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.java.guides.springboot.model.Produit;

@Repository
public interface ProduitRepository extends JpaRepository<Produit, Long> {

}
