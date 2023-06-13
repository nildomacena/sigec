import { Component } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-nova-inspecao-dialog',
  templateUrl: './nova-inspecao-dialog.component.html',
  styleUrls: ['./nova-inspecao-dialog.component.scss']
})
export class NovaInspecaoDialogComponent {
  aprovadorSelecionado?: string;
  aprovadores = [
    'Aprovador 01',
    'Aprovador 02',
    'Aprovador 03',
    'Aprovador 04',
  ];
  camaras = [
    '01',
    '02',
    '03',
    '04',
    '05',
  ];
  camaraSelecionada?: string;
  comCamara: boolean = false;
  tipoInspecaoSelecionado?: string;

  constructor(private ref: DynamicDialogRef,
    private config: DynamicDialogConfig) {
    if (this.config.data) {
      this.comCamara = this.config.data.comCamara ?? false;
    }
    console.log(this.comCamara);
  }
}
