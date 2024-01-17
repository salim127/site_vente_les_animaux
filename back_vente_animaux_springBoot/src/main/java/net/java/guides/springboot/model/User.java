package net.java.guides.springboot.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="user")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long iduser;
    
    private String email;
    
    private String mdp;
    
    @Column(name = "role")
    private String role;
    
    

    public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	// Constructeur par défaut
    public User() {
    }

    public User(Long iduser, String email, String mdp) {
        this.iduser = iduser;
        this.email = email;
        this.mdp = mdp;
    }

    public Long getIduser() {
        return iduser;
    }

    public void setIduser(Long iduser) {
        this.iduser = iduser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    @Override
    public String toString() {
        return "User [iduser=" + iduser + ", email=" + email + ", mdp=" + mdp + "]";
    }
}
