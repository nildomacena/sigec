import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEstrutura } from 'src/app/interfaces/estrutura';
import { EstruturasService } from '../../estruturas.service';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { IncluirAnexoDialogComponent } from 'src/app/components/dialogs/incluir-anexo-dialog/incluir-anexo-dialog.component';
import { ITipoAnexo } from 'src/app/interfaces/tipo-anexo';
import { IElemento } from 'src/app/interfaces/elemento';

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
  editar = false;
  formFirstStep: FormGroup;
  formSecondStep: FormGroup;

  anexos: {
    id: number;
    tipoAnexo: ITipoAnexo;
    descricao: string;
  }[] = [];
  ufs: IUF[] = [];

  constructor(
    private route: ActivatedRoute,
    private estruturaService: EstruturasService,
    private formBuilder: FormBuilder,
    private dialogService: DialogService,
    private messageService: MessageService,
  ) {
    this.ufs = Utils.IUF;
    this.formFirstStep = this.formBuilder.group({
      codigoSigec: [null, [Validators.required]],
      codigoSap: [null, [Validators.required]],
      nomeEstrutura: [null, [Validators.required]],
      unidade: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      endereco: [null, [Validators.required]],
      numero: [null, [Validators.required]],
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['estruturaId'];
      this.estrutura = this.estruturaService.getEstrutura(+id);
      this.formFirstStep.controls['codigoSigec'].setValue(this.estrutura!.id);
      this.formFirstStep.controls['codigoSap'].setValue(this.estrutura!.id);
      this.formFirstStep.controls['nomeEstrutura'].setValue(this.estrutura!.nome);
      this.formFirstStep.controls['unidade'].setValue('Centro');
      this.formFirstStep.controls['cep'].setValue('11111-111');
      this.formFirstStep.controls['endereco'].setValue('Rua Teste');
      this.formFirstStep.controls['numero'].setValue('123');
      this.formFirstStep.controls['uf'].setValue(this.ufs[0].sigla);
      this.formFirstStep.controls['municipio'].setValue(this.ufs[1].sigla);
      this.formFirstStep.disable();

      this.formSecondStep.controls['tipoEstrutura'].setValue(this.tiposEstruturas[1].id);
      this.formSecondStep.controls['camara'].setValue('1');
      this.formSecondStep.controls['celula'].setValue('1');
      this.formSecondStep.controls['material'].setValue(this.materiais[1].id);
      this.formSecondStep.controls['capacidade'].setValue('100');
      this.formSecondStep.controls['situacao'].setValue(this.situacoes[1].id);
      this.formSecondStep.controls['dataConstrucao'].setValue('01/01/2021');
      this.formSecondStep.controls['dataOperacao'].setValue('01/02/2021');
      this.formSecondStep.controls['largura'].setValue('10');
      this.formSecondStep.controls['comprimento'].setValue('10');
      this.formSecondStep.controls['altura'].setValue('10');
      this.formSecondStep.controls['diametro'].setValue('10');
      this.formSecondStep.disable();
    });
  }

  toggleEditar() {
    this.editar = !this.editar;
    if (this.editar) {
      this.formFirstStep.enable();
      this.formSecondStep.enable();
    } else {
      this.formSecondStep.disable();
      this.formFirstStep.disable();
    }
    console.log(this.editar)
  }

  openAnexoDialog() {
    var ref = this.dialogService.open(IncluirAnexoDialogComponent, {
      header: 'INCLUIR ANEXOS',
      width: '50%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    ref.onClose.subscribe((anexo: any) => {
      if (anexo) {
        this.messageService.add({
          severity: 'info', summary: 'NOVO REGISTRO', detail: anexo
        });
        this.anexos.push({ id: (new Date()).getTime(), ...anexo });
        console.log(this.anexos);
      }
    });
  }

  inspecionarEstrutura(value: any) { }
  visualizarEstrutura(value: any) { }

  validarSecondStep() { }

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


}
