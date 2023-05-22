import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[] = [];

  isSidebarExpanded = true;
  user = true;

  constructor(private router: Router) {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/home'],
      },
      {
        label: 'Procedimentos',
        items: [
          {
            label: 'Aquisição de arma',
            routerLink: ['/aquisicao-arma'],
          },
          {
            label: 'Transferência de arma',
            routerLink: ['/cadastrar-transferencia'],
          },
        ],
      },];
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  isLoginPage(): boolean {
    return this.router.url.indexOf('login') > 0;
  }

  goToEstruturas() {
    this.router.navigate(['/estruturas']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  logout() {
    console.log('logout');
    this.router.navigate(['/login']);
  }
}
