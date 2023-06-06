import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

interface IAnomalia {
  nome: string;
  id: number;
}

interface IAnexo {
  file: File, name: string, data: number, tipo: string, descricao: string
}

@Component({
  selector: 'app-novo-registro-dialog',
  templateUrl: './novo-registro-dialog.component.html',
  styleUrls: ['./novo-registro-dialog.component.scss']
})
export class NovoRegistroDialogComponent {
  anomaliaSelecionada?: string;
  elementoSelecionado?: string;
  classificacaoSelecionada?: string;
  recente: boolean = false;
  textoDescritivo: string = '';
  anomalias = [
    { nome: 'Trincas e/ou rachaduras horizontais', id: 1 },
    { nome: 'Trincas e/ou rachaduras verticais', id: 2 },
    { nome: 'Trincas e/ou rachaduras inclinadas', id: 3 },
    { nome: 'Infiltração', id: 4 },
    { nome: 'Manchas esbranquiçadas na superfície', id: 5 },
  ];
  anexos: IAnexo[] = [
  ];
  anexoSelecionado?: { descricao: string, data: string, tipo: string };
  observacoes: string = '';

  constructor(
    private messageService: MessageService,
  ) { }

  openUpload() {
    document.getElementById('fileUpload')?.click();

  }

  onUploadFile(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    console.log(event)
    if (!files) return;
    const file = files[0];
    this.anexos.push({ file: file, name: file.name, data: Date.now(), tipo: file.type, descricao: this.textoDescritivo });
    this.textoDescritivo = '';
    this.messageService.add({ severity: 'info', summary: 'Successo', detail: 'Arquivo adicionado' });
    console.log(this.anexos);
  }

  checkAnexoSelecionado() {
    console.log(this.anexoSelecionado);
  }

  onSelectAnexo(anexo: any) {
    this.anexoSelecionado = anexo;
  }

  onDeleteAnexo(anexo: IAnexo) {
    this.anexos = this.anexos.filter(a => a.name !== anexo.name);
  }
}
