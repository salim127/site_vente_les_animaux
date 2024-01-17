import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-register-u',
  templateUrl: './register-u.component.html',
  styleUrls: ['./register-u.component.scss']
})
export class RegisterUComponent {

  register = {
    email: '',
    mdp: '',

  };

  constructor(private service: ServiceService ,private route:Router) {}

  onSubmit() {
    this.service.createUser(this.register).subscribe(
      data => {
        console.log(data);
        alert('compte ajouté avec succès!');
      },
      
    );
    this.route.navigate(['/login']);
    
  }
}
