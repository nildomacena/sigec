import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: MenuItem[] = [];

  isSidebarExpanded = true;
  user = true;

  constructor(private router: Router, private translate: TranslateService, private config: PrimeNGConfig) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
    this.config.setTranslation({
      accept: 'Aceitar',
      reject: 'Cancelar',
      dateFormat: 'dd/mm/yy',
      today: 'Hoje',
      clear: 'Limpar',
      weekHeader: 'Sm',
      weak: 'Fraco',
      medium: 'Médio',
      strong: 'Forte',
      dayNames: [
        'Domingo',
        'Segunda',
        'Terça',
        'Quarta',
        'Quinta',
        'Sexta',
        'Sabado',
      ],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
      dayNamesShort: [
        'Dom',
        'Seg',
        'Ter',
        'Qua',
        'Qui',
        'Sex',
        'Sab'
      ],
      monthNames: [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      ]
      //translations
    });
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

  ngOnInit(): void {
    document.getElementById("menu-toggle")?.addEventListener("click", function () {
      document.querySelector(".main-sidebar")?.classList.remove("menu-closed");
      console.log('click');
    });
  }

  toggleSidebar() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
  }

  isLoginPage(): boolean {
    return this.router.url.indexOf('login') > 0 || this.router.url === '/';
  }

  goToEstruturas() {
    this.router.navigate(['/estruturas']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToLocalidades() {
    this.router.navigate(['/localidades']);
  }

  goToParametros() {
    this.router.navigate(['/parametros']);
  }

  logout() {
    console.log('logout');
    this.router.navigate(['/login']);
  }
}
