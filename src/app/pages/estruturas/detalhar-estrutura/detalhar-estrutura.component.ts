import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEstrutura } from 'src/app/interfaces/estrutura';
import { EstruturasService } from '../../estruturas.service';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-detalhar-estrutura',
  templateUrl: './detalhar-estrutura.component.html',
  styleUrls: ['./detalhar-estrutura.component.scss']
})
export class DetalharEstruturaComponent {
  estrutura?: IEstrutura;
  tiposEstruturas = Utils.tiposEstruturas;
  materiais = Utils.materiais;
  situacoes = Utils.situacoes;
  anexos = [
    { nome: 'Anexo 1.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 2.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 3.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 4.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 5.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 6.pdf', descricao: 'Descrição do Arquivo' },
    { nome: 'Anexo 7.pdf', descricao: 'Descrição do Arquivo' },
  ];
  ufs: IUF[] = [];

  constructor(private route: ActivatedRoute, private estruturaService: EstruturasService) {
    this.ufs = Utils.IUF;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['estruturaId'];
      this.estrutura = this.estruturaService.getEstrutura(+id);
      console.log(typeof id)
      console.log(this.estrutura)
    });
  }
  inspecionarEstrutura(value: any) { }
  visualizarEstrutura(value: any) { }
}
