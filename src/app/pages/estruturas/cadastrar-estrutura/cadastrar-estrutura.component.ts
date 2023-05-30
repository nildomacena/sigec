import { Component } from '@angular/core';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-cadastrar-estrutura',
  templateUrl: './cadastrar-estrutura.component.html',
  styleUrls: ['./cadastrar-estrutura.component.scss']
})
export class CadastrarEstruturaComponent {
  tabIndex = 2;
  ufs: IUF[] = [];
  estruturas = [];
  anexos = [];
  situacoes = Utils.situacoes;
  tiposEstruturas = Utils.tiposEstruturas;

  visualizarEstrutura(estrutura: any) {
    console.log(estrutura);
  }

  inspecionarEstrutura(estrutura: any) {
    console.log(estrutura);
  }

  voltar() {
    console.log('voltar')
    if (this.tabIndex > 0) {
      this.tabIndex--;
      console.log(this.tabIndex)
    }
  }

  onChangeIndex(index: number) {
    console.log('onChangeIndex')
    this.tabIndex = index;
    console.log(this.tabIndex)
  }
}
