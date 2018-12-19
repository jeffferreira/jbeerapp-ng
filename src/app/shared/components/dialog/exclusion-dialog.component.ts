import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-exclusion-dialog',
  templateUrl: './exclusion-dialog.component.html'
})
export class ExclusionDialogComponent  {

  modalTitle: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.modalTitle = data.title;
  }

}