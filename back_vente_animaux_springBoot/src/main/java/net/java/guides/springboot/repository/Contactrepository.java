package net.java.guides.springboot.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.java.guides.springboot.model.Contact;

@Repository

public interface Contactrepository extends JpaRepository<Contact, Long> {
	
	

}
