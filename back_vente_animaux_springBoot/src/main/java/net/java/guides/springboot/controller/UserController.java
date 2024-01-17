package net.java.guides.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import net.java.guides.springboot.model.Contact;
import net.java.guides.springboot.model.User;
import net.java.guides.springboot.repository.UserRepository;


@RestController
@RequestMapping("/ApiUser")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/singIn", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> donnerUser(@RequestParam String email, @RequestParam String mdp) {
        User user = userRepository.findByEmailAndMdp(email, mdp);

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        // Vérifiez le rôle de l'utilisateur et le mot de passe
        if ("salim@gmail.com".equals(user.getEmail()) && "admin".equals(user.getMdp())) {
            user.setRole("admin");
        } else {
            user.setRole("user");
        }

        return ResponseEntity.ok(user);
    }
    
    @PostMapping
   
	public User createUser(@RequestBody User user ) {
		return userRepository.save(user);
		}

}
