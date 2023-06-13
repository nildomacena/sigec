import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { NovaInspecaoDialogComponent } from 'src/app/components/dialogs/nova-inspecao-dialog/nova-inspecao-dialog.component';
import { NovoRegistroDialogComponent } from 'src/app/components/dialogs/novo-registro-dialog/novo-registro-dialog.component';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { IncluirUsuarioDialogComponent } from 'src/app/components/dialogs/incluir-usuario-dialog/incluir-usuario-dialog.component';
import { ConfirmDialogComponent } from 'src/app/components/dialogs/confirm-dialog/confirm-dialog.component';

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

  inspecoes = [
    { id: 1, 'status': 'Concluído', 'data': '01/01/2021', 'tipo': 'Inspeção Sem Plano', 'inspetor': 'João da Silva', 'camara': 'Não aplicável', 'classificacao': 'Intensificação de Dano' },
    { id: 2, 'status': 'Concluído', 'data': '02/01/2021', 'tipo': 'Inspeção Sem Plano', 'inspetor': 'Maria da Silva', 'camara': 'Não aplicável', 'classificacao': 'Intensificação de Dano' },
    { id: 3, 'status': 'Concluído', 'data': '03/01/2021', 'tipo': 'Inspeção Sem Plano', 'inspetor': 'José da Silva', 'camara': 'Não aplicável', 'classificacao': 'Intensificação de Dano' },
  ];
  form: FormGroup
  faUsers = faUsers;

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private messageService: MessageService,
    private router: Router,
  ) {
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

  abrirNovaInspecaoDialog(comCamara: boolean) {
    let ref: DynamicDialogRef;

    ref = this.dialogService.open(NovaInspecaoDialogComponent, {
      header: 'INSPECIONAR ESTRUTURA',
      width: '75%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        comCamara: comCamara
      }
    });

    ref.onClose.subscribe((product: string) => {
      if (product) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: product
        });
      }
      console.log(product)
    });
  }

  abrirUsuariosDialog() {
    let ref: DynamicDialogRef;

    ref = this.dialogService.open(IncluirUsuarioDialogComponent, {
      header: 'USUÁRIOS',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,

    });

    ref.onClose.subscribe((product: string) => {
      if (product) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: product
        });
      }
      console.log(product)
    });
  }

  irParaInspecaoOperacional() {
    this.router.navigate(['/cadastrar-inspecao-op/' + 1]);
  }


  reabrirInspecao(
    inspecao: any
  ) {
    let ref: DynamicDialogRef;

    ref = this.dialogService.open(ConfirmDialogComponent, {
      header: 'REABRIR INSPEÇÃO',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: {
        message: `Deseja reabrir a Inspeção <strong>"${inspecao.tipo}"</strong>`
      }
    });

    ref.onClose.subscribe((confirm: true) => {
      if (confirm) {
        this.inspecoes = this.inspecoes.map((inspecaoMap: any) => {
          if (inspecaoMap.id === inspecao.id) {
            inspecaoMap.status = 'Em andamento';
          }
          return inspecaoMap;
        });
      }
    });

  }
}
