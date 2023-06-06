import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ITipoAnexo } from 'src/app/interfaces/tipo-anexo';
import { Utils } from 'src/app/shared/utils';

@Component({
  selector: 'app-incluir-anexo-dialog',
  templateUrl: './incluir-anexo-dialog.component.html',
  styleUrls: ['./incluir-anexo-dialog.component.scss']
})
export class IncluirAnexoDialogComponent {
  form: FormGroup;
  tiposAnexo: ITipoAnexo[] = Utils.tiposAnexo;
  arquivo?: File;

  constructor(
    private formBuilder: FormBuilder, public ref: DynamicDialogRef
  ) {
    this.form = this.formBuilder.group({
      tipoAnexoId: [null, [Validators.required]],
      descricao: ['', [Validators.required]],
      arquivo: [null, [Validators.required]],
      tipoAnexo: [null, [Validators.required]],
    });
    this.form.get('tipoAnexoId')?.valueChanges.subscribe((tipoAnexoId) => {
      const tipoAnexo = this.tiposAnexo.find((tipo) => tipo.id == tipoAnexoId);
      this.form.patchValue({ tipoAnexo });
      console.log(tipoAnexo);
      console.log(this.form.value);
    });
  }

  openUpload() {
    document.getElementById('fileUpload')?.click();
  }

  onUploadFile(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (!files) return;
    const file = files[0];
    this.form.patchValue({ arquivo: file });
  }

  salvarAnexo() {
    if (this.form.invalid) return;
    this.ref?.close(this.form.value);
  }
  console() { console.log(this.form.value) }
}

