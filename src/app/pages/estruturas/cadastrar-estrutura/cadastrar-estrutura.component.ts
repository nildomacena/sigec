import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IncluirAnexoDialogComponent } from 'src/app/components/dialogs/incluir-anexo-dialog/incluir-anexo-dialog.component';
import { IncluirElementDialogComponent } from 'src/app/components/dialogs/incluir-element-dialog/incluir-element-dialog.component';
import { IElemento } from 'src/app/interfaces/elemento';
import { ITipoAnexo } from 'src/app/interfaces/tipo-anexo';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-cadastrar-estrutura',
  templateUrl: './cadastrar-estrutura.component.html',
  styleUrls: ['./cadastrar-estrutura.component.scss']
})
export class CadastrarEstruturaComponent {
  tabIndex = 2;
  ufs: IUF[] = Utils.IUF;
  estruturas = [];
  anexos: {
    id: number;
    tipoAnexo: ITipoAnexo;
    descricao: string;
  }[] = [];
  situacoes = Utils.situacoes;
  tiposEstruturas = Utils.tiposEstruturas;
  formFirstStep: FormGroup;
  formSecondStep: FormGroup;
  ref?: DynamicDialogRef;
  elementos: IElemento[] = [
    {
      "id": 1685917428664,
      "familia": "asdfa",
      "tipoElemento": "Principal",
      "faces": "1234",
      "elementos": "1341",
      "maiorDimensao": "11234",
      "menorDimensao": "2345",
      "comprimento": "245",
      "somaLados": "245",
      "areaSuperficieUnitaria": "245",
      "areaSuperficieGeral": "245",
      "areaAdicional": "25",
      "areaTotal": "235",
      "observacoes": null
    }
  ];
  municipios = [
    { nome: 'Maceió', sigla: 'MCZ' },
    { nome: 'Arapiraca', sigla: 'APQ' },
    { nome: 'Penedo', sigla: 'PND' },
    { nome: 'São Miguel dos Campos', sigla: 'SMC' },
    { nome: 'Santana do Ipanema', sigla: 'SIP' },
    { nome: 'Palmeira dos Índios', sigla: 'PDI' },
  ];


  constructor(private formBuilder: FormBuilder, public dialogService: DialogService, public messageService: MessageService,) {
    this.formFirstStep = this.formBuilder.group({
      codigoSigec: ['123', [Validators.required]],
      codigoSap: ['123', [Validators.required]],
      nomeEstrutura: ['teste', [Validators.required]],
      unidade: ['123', [Validators.required]],
      cep: ['57082-005', [Validators.required]],
      endereco: ['teste', [Validators.required]],
      numero: ['123', [Validators.required]],
      uf: [null, [Validators.required]],
      municipio: [null, [Validators.required]]
    });

    this.formSecondStep = this.formBuilder.group({
      tipoEstrutura: [null, [Validators.required]],
      camara: [null, [Validators.required]],
      celula: [null, [Validators.required]],
      material: [null, [Validators.required]],
      capacidade: [null, [Validators.required]],
      situacao: [null, [Validators.required]],
      dataConstrucao: [null, [Validators.required]],
      dataOperacao: [null, [Validators.required]],
      largura: [null, [Validators.required]],
      comprimento: [null, [Validators.required]],
      altura: [null, [Validators.required]],
      diametro: [null, [Validators.required]],
    });
  }

  validarFirstStep() {
    console.log(this.formFirstStep.value)
    console.log(this.formFirstStep.valid)
    this.formFirstStep.markAllAsTouched();
    if (this.formFirstStep.valid) {
      this.tabIndex++;
    }
  }

  validarSecondStep() {
    console.log(this.formFirstStep.value)
    console.log(this.formFirstStep.valid)
    this.formSecondStep.markAllAsTouched();
    if (this.formSecondStep.valid) {
      this.tabIndex++;
    }
  }
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

  openAnexoDialog() {
    this.ref = this.dialogService.open(IncluirAnexoDialogComponent, {
      header: 'INCLUIR ANEXOS',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((anexo: any) => {
      if (anexo) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: anexo
        });
        this.anexos.push({ id: (new Date()).getTime(), ...anexo });
        console.log(this.anexos);
      }
    });
  }

  openElementoDialog() {
    this.ref = this.dialogService.open(IncluirElementDialogComponent, {
      header: 'NOVO ELEMENTO',
      width: '75%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((elemento: IElemento | undefined) => {
      if (elemento) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: 'Elemento incluído com sucesso!'
        });
        this.elementos.push({ id: (new Date()).getTime(), ...elemento });
        console.log(this.elementos);
      }
    });

  }

  anexosFotografias() {
    return this.anexos.filter((anexo) => anexo.tipoAnexo.id == 1);
  }

  anexosPlantas() {
    return this.anexos.filter((anexo) => anexo.tipoAnexo.id == 2);
  }

  anexosDocumentos() {
    return this.anexos.filter((anexo) => anexo.tipoAnexo.id == 3);
  }

  deleteAnexo(anexo: any) {
    this.anexos = this.anexos.filter((a) => a.id != anexo.id);
    console.log(this.anexos)
    console.log(anexo)
  }

  getURLFromArquivo(arquivo: File): string {
    if (arquivo) {
      return URL.createObjectURL(arquivo);
    }
    return '';
  }

  abrirImagem(arquivo: File): void {
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      window.open(url, '_blank');
    }
  }

  downloadArquivo(arquivo: File): void {
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      const link = document.createElement('a');
      link.href = url;
      link.download = arquivo.name;
      link.click();
    }
  }

  deleteElemento(elemento: IElemento) {
    this.elementos = this.elementos.filter((e) => e.id != elemento.id);
    console.log(this.elementos)
    console.log(elemento)
  }

  editarElemento(elemento: IElemento) {
    this.ref = this.dialogService.open(IncluirElementDialogComponent, {
      header: 'EDITAR ELEMENTO',
      width: '75%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true,
      data: elemento
    });

    this.ref.onClose.subscribe((elemento: IElemento | undefined) => {
      if (elemento) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: 'Elemento alterado com sucesso!'
        });
        this.elementos = this.elementos.map((e) => {
          if (e.id == elemento?.id) {
            return elemento;
          }
          return e;
        });
        console.log(this.elementos);
      }
    });
  }
}
