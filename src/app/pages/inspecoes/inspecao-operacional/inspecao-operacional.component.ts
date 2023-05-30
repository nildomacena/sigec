import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NovoRegistroDialogComponent } from 'src/app/components/novo-registro-dialog/novo-registro-dialog.component';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-inspecao-operacional',
  templateUrl: './inspecao-operacional.component.html',
  styleUrls: ['./inspecao-operacional.component.scss']
})
export class InspecaoOperacionalComponent {
  anexos = [];
  ufs = Utils.IUF;
  situacoes = Utils.situacoes;
  tiposEstruturas = Utils.tiposEstruturas;
  ref?: DynamicDialogRef;

  ocorrencias = [
    { data: '01/01/2021', hora: '10:00', usuario: 'João', perfil: 'Inspetor', descricao: 'Ocorrência 1' },
    { data: '02/01/2021', hora: '11:00', usuario: 'Maria', perfil: 'Inspetor', descricao: 'Ocorrência 2' },
    { data: '03/01/2021', hora: '12:00', usuario: 'José', perfil: 'Inspetor', descricao: 'Ocorrência 3' },
    { data: '04/01/2021', hora: '13:00', usuario: 'Joana', perfil: 'Inspetor', descricao: 'Ocorrência 4' },
    { data: '05/01/2021', hora: '14:00', usuario: 'Pedro', perfil: 'Inspetor', descricao: 'Ocorrência 5' },
    { data: '06/01/2021', hora: '15:00', usuario: 'Paula', perfil: 'Inspetor', descricao: 'Ocorrência 6' },
    { data: '07/01/2021', hora: '16:00', usuario: 'Carlos', perfil: 'Inspetor', descricao: 'Ocorrência 7' },
  ]

  constructor(public dialogService: DialogService, public messageService: MessageService) { }



  showDialog() {
    console.log('show dialog')
    this.ref = this.dialogService.open(NovoRegistroDialogComponent, {
      header: 'NOVO REGISTRO',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((product: string) => {
      if (product) {
        this.messageService.add({

          severity: 'info', summary: 'NOVO REGISTRO', detail: product
        });
      }
      console.log(product)
    });

  }
}
