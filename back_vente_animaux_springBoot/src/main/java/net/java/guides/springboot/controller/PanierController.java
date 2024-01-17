package net.java.guides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import net.java.guides.springboot.model.Panier;
import net.java.guides.springboot.repository.PanierRepository;


@RestController
@RequestMapping("api/panier")
public class PanierController {
	
	@Autowired
	PanierRepository panierRepository;
	
	
	@GetMapping("/afficher")
	public List<Panier>getPanier(){
		return panierRepository.findAll();
	}
	
	
	@PostMapping("/ajouter")
	public Panier createPanier(@RequestBody Panier panier) {
		return panierRepository.save(panier);
		
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePanier(@PathVariable long id){
		panierRepository.deleteById(id);
		return  ResponseEntity.noContent().build();
	}


}
