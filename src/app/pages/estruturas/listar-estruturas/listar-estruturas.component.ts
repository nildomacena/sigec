import { Component } from '@angular/core';
import { IEstrutura } from 'src/app/interfaces/estrutura';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';
import { EstruturasService } from '../../estruturas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-estruturas',
  templateUrl: './listar-estruturas.component.html',
  styleUrls: ['./listar-estruturas.component.scss']
})
export class ListarEstruturasComponent {
  ufs: IUF[] = [];
  estruturas: IEstrutura[] = [];
  constructor(private estruturasService: EstruturasService, private router: Router) {
    this.ufs = Utils.IUF
    this.estruturas = this.estruturasService.getEstruturas();
  }

  visualizarEstrutura(estrutura: IEstrutura) {
    this.router.navigate(['/detalhar-estrutura', estrutura.id]);
  }

  inspecionarEstrutura(estrutura: IEstrutura) {
    this.router.navigate(['/listar-inspecoes/', estrutura.id]);
  }
}
