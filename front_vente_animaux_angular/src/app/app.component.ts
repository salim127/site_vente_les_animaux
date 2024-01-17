import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAppAngular';
  
  //les route ili bech na7i minhom navbar w footer
  constructor(public router: Router ) {}
 
  
  SuprrimerNavbarFooter(): boolean {
    const excludedPaths = ['/dashbord', '/DoContact','/produit','/ajouterproduit',/^\/modifierproduit\/\d+$/];
    return !excludedPaths.some(path => {
      if (typeof path === 'string') {
        return this.router.url === path;
      } else if (path instanceof RegExp) {
        return path.test(this.router.url);
      }
      return false;
    });
  }
  
}
