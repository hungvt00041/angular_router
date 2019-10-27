import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue-confirm',
  templateUrl: './dialogue-confirm.component.html',
  styleUrls: ['./dialogue-confirm.component.css']
})
export class DialogueConfirmComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogueConfirmComponent>
  ){}
  onNoClick(): void {
    this.dialogRef.close();
  }

}
