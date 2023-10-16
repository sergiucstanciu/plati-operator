import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username: string = 'Ionut Cosmin Carabat';
  usernameLetters: string = '';
  panelOpenState = false;
  public isMenuOpen: boolean = false;
  private token: any;
  private isLoading: boolean = false;

  constructor(private router: Router) {}
  
  ngOnInit(): void {
    this.extractLetters(this.username);
  }

  extractLetters(username: string) {
    const firstLetters = username.split(' ').map((word) => word.charAt(0));
    this.usernameLetters = firstLetters.slice(0, 2).join('');
  }

  onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  logout() {
    this.router.navigate(['/']);
  }
}
