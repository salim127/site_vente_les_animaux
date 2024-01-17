package net.java.guides.springboot.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.java.guides.springboot.model.Contact;

import net.java.guides.springboot.repository.Contactrepository;



@RestController
@RequestMapping("/api/contacts")
public class ContactController {

	@Autowired
	Contactrepository contactrepository;
	


	@GetMapping("afficher")
	public List<Contact>getContact(){
		return contactrepository.findAll();
		}
	
	
	@PostMapping
	public Contact createContact(@RequestBody Contact contact ) {
		return contactrepository.save(contact);
		}
	
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteContact(@PathVariable long id) {
		contactrepository.deleteById(id);
	    return ResponseEntity.noContent().build();
	}
	
	//get employee by id
	@GetMapping("{id}")
	public ResponseEntity<Contact> getEmployeeById(@PathVariable long id) {
	    Contact contact = contactrepository.findById(id)
	  .orElseThrow();
	    return ResponseEntity.ok(contact);
	}
	
	}
