package net.java.guides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;


import net.java.guides.springboot.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	User findByEmailAndMdp(String email, String mdp);

}
