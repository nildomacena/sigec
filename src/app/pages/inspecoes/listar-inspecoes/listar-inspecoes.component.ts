import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar-inspecoes',
  templateUrl: './listar-inspecoes.component.html',
  styleUrls: ['./listar-inspecoes.component.scss']
})
export class ListarInspecoesComponent {
  tiposInspecao = [
    'Inspeção Sem Plano',
    'Inspeção Operacional',
    'Plano de Manutenção de Estruturas Civis',
    'Plano de Mitigação de Riscos de Baixa Liberação',
  ];
  camaras = [
    'Não aplicável',
    '01',
    '02',
    '03',
    '04',
  ];

  inpecoes = [
    'Inspeção 01',
    'Inspeção 02',
    'Inspeção 03',
    'Inspeção 04',
  ];
  form: FormGroup
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      tipoInspecao: [''],
      camara: [''],
      dataInicio: [''],
      dataFim: [''],
    });
  }

  limparFiltros() {
    this.form.reset();
  }
}
