import { Component, HostListener, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('drawer') drawer: MatDrawer;

  title = 'articles';
  innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  constructor(private router: Router , private authService: AuthService) { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  isActivePage(url) {
    return this.router.url === url;
  }

  logout(){
    this.router.navigate(['/home']);
    setTimeout(() => {
      localStorage.removeItem('user');
      this.drawer.toggle();
    }, 200);
  }

  getUser(){
    return !!this.authService.getUser();
  }
}
