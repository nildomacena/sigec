import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LocalidadeDialogComponent } from 'src/app/components/dialogs/localidade-dialog/localidade-dialog.component';
import { ILocalidade } from 'src/app/interfaces/localidade';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-localidades',
  templateUrl: './localidades.component.html',
  styleUrls: ['./localidades.component.scss']
})
export class LocalidadesComponent {
  ufs: IUF[] = [];
  localidades: ILocalidade[] = [];
  constructor(private router: Router, private dialogService: DialogService,
    private messageService: MessageService,) {
    this.ufs = Utils.IUF
    this.localidades = Utils.localidades;
  }

  abrirUsuariosDialog(localidade?: any) {
    let ref: DynamicDialogRef;

    ref = this.dialogService.open(LocalidadeDialogComponent, {
      header: 'CADASTRAR LOCALIDADE',
      width: '75%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: localidade
    });

    ref.onClose.subscribe((localidade: any) => {
      if (localidade) {
        if (localidade.id) {
          const index = Utils.localidades.findIndex((element) => element.id === localidade.id);
          Utils.localidades[index] = localidade;
          this.messageService.add({
            severity: 'info', summary: 'CADASTRAR LOCALIDADE', detail: 'Localidade Atualizada com Sucesso!'
          });
        }
        else {
          localidade.id = Utils.localidades.length + 1;
          Utils.localidades.push(localidade);
          this.messageService.add({
            severity: 'info', summary: 'CADASTRAR LOCALIDADE', detail: 'Localidade Cadastrada com Sucesso!'
          });
        }

      }
      console.log(localidade)
    });
  }
}
