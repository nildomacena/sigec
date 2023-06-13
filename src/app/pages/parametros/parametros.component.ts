import { Component } from '@angular/core';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.scss']
})
export class ParametrosComponent {
  tipos = [
    'Alfanumérico', 'Booleano', 'Número Inteiro'
  ];

  parametros = [
    { rotulo: 'Parâmetro Alfanumérico', tipo: 'Alfanumérico', valor: 'ABCabc123*@!' },
    { rotulo: 'Parâmetro Booleano', tipo: 'Booleano', valor: 'Verdadeiro ou False' },
    { rotulo: 'Parâmetro Número Inteiro', tipo: 'Número Inteiro', valor: '1234567890' },
    { rotulo: 'Clássificação da Estrutura <15', tipo: 'Alfanumérico', valor: 'Normal' },
    { rotulo: 'Fenótipo da Estrutura <15', tipo: 'Alfanumérico', valor: 'Presença ínfima de anomalias, baixa gravidade' },
    { rotulo: 'Ações da Estrutura <15', tipo: 'Alfanumérico', valor: 'Não reinspecionar em menos de 15 anos, contra indicar intervenção' },
    { rotulo: 'Qualitativo Fissura', tipo: 'Alfanumérico', valor: 'F1: Por retração ou causa similar \r\n F2: Devido à corrosão das armaduras por baixo cobrimento \r\n F3: Em juntas de concretagem ou causa similar \r\n F4: Com manchas de corrosão ou eflorescências (associa...' },
    { rotulo: 'Qualitativo Corrosão', tipo: 'Alfanumérico', valor: 'A1: Manchas de Corrosão \r\n A2: devido a baixo cobrimento \r\n A3: Em armadura exposta \r\n A4: Com perda de seção \r\n A5: Armadura exposta e anomalias associadas' },




  ];
}
