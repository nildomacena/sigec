import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  message?: string;
  confirmLabel?: string;
  constructor(
    public ref: DynamicDialogRef,
    private config: DynamicDialogConfig
  ) {
    if (
      this.config.data
    ) {
      if (this.config.data.confirmLabel) this.confirmLabel = this.config.data.confirmLabel;
      if (this.config.data.message) this.message = this.config.data.message;
    }
    this.message ??= 'Deseja realmente executar essa operação?';
    this.confirmLabel ??= 'Confirmar';
  }

  onConfirmar() {
    this.ref?.close(true);
  }

  onCancel() {
    this.ref?.close();
  }
}
