import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { IElemento } from 'src/app/interfaces/elemento';

@Component({
  selector: 'app-incluir-element-dialog',
  templateUrl: './incluir-element-dialog.component.html',
  styleUrls: ['./incluir-element-dialog.component.scss']
})
export class IncluirElementDialogComponent implements OnInit {
  form: FormGroup;
  elementoSelecionado?: IElemento;
  elementos = [
    'Principal', 'Secundário', 'Auxiliar'
  ];

  constructor(
    private formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.form = this.formBuilder.group({
      familia: [null, [Validators.required]],
      tipoElemento: [null, [Validators.required]],
      faces: [null, [Validators.required]],
      elementos: [null, [Validators.required]],
      maiorDimensao: [null, [Validators.required]],
      menorDimensao: [null, [Validators.required]],
      comprimento: [null, [Validators.required]],
      somaLados: [null, [Validators.required]],
      areaSuperficieUnitaria: [null, [Validators.required]],
      areaSuperficieGeral: [null, [Validators.required]],
      areaAdicional: [null, [Validators.required]],
      areaTotal: [null, [Validators.required]],
      observacoes: [null],
    });

  }

  ngOnInit(): void {
    this.elementoSelecionado = this.config.data;
    if (this.elementoSelecionado) {
      this.form.controls['familia'].setValue(this.elementoSelecionado!['familia']);
      this.form.controls['tipoElemento'].setValue(this.elementoSelecionado!.tipoElemento);
      this.form.controls['faces'].setValue(this.elementoSelecionado!.faces);
      this.form.controls['elementos'].setValue(this.elementoSelecionado!.elementos);
      this.form.controls['maiorDimensao'].setValue(this.elementoSelecionado!.maiorDimensao);
      this.form.controls['menorDimensao'].setValue(this.elementoSelecionado!.menorDimensao);
      this.form.controls['comprimento'].setValue(this.elementoSelecionado!.comprimento);
      this.form.controls['somaLados'].setValue(this.elementoSelecionado!.somaLados);
      this.form.controls['areaSuperficieUnitaria'].setValue(this.elementoSelecionado!.areaSuperficieUnitaria);
      this.form.controls['areaSuperficieGeral'].setValue(this.elementoSelecionado!.areaSuperficieGeral);
      this.form.controls['areaAdicional'].setValue(this.elementoSelecionado!.areaAdicional);
      this.form.controls['areaTotal'].setValue(this.elementoSelecionado!.areaTotal);
      this.form.controls['observacoes'].setValue(this.elementoSelecionado!.observacoes);
    }
  }

  console() {
    console.log(this.form)
  }

  salvarElemento() {
    this.ref?.close({ id: this.elementoSelecionado?.id, ...this.form.value });
  }

}
