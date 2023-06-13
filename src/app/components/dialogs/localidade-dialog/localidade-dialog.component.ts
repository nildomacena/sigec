import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ILocalidade } from 'src/app/interfaces/localidade';
import { IUF } from 'src/app/interfaces/uf';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-localidade-dialog',
  templateUrl: './localidade-dialog.component.html',
  styleUrls: ['./localidade-dialog.component.scss']
})
export class LocalidadeDialogComponent {
  form: FormGroup;
  localidadeSelecionada?: ILocalidade;
  ufs: IUF[];
  municipios: string[] = [];
  constructor(
    private formBuilder: FormBuilder,
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    this.form = this.formBuilder.group({
      endereco: [null, Validators.required],
      numero: [null, Validators.required],
      cep: [null, Validators.required],
      uf: [null, Validators.required],
      municipio: [null, Validators.required],
    });
    this.ufs = Utils.IUF;
    this.municipios = [
      'São Paulo',
      'São Bernardo do Campo',
      'São Caetano do Sul',
      'Diadema',
      'Mauá',
      'Ribeirão Pires',
      'Rio Grande da Serra',
      'Santo André',
    ];
    this.localidadeSelecionada = this.config.data;
    if (this.localidadeSelecionada) {
      this.form.controls['endereco'].setValue(this.localidadeSelecionada.endereco);
      this.form.controls['numero'].setValue(this.localidadeSelecionada.numero);
      this.form.controls['cep'].setValue(this.localidadeSelecionada.cep);
      this.form.controls['uf'].setValue(this.localidadeSelecionada.uf);
      this.form.controls['municipio'].setValue(this.localidadeSelecionada.municipio);
    }
  }

  console() {
    console.log(this.form)
  }

  salvarElemento() {
    this.ref?.close({ id: this.localidadeSelecionada?.id, ...this.form.value });
  }

}
