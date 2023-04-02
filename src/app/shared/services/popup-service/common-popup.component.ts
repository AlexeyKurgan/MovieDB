import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'common-popup',
  templateUrl: './common-popup.component.html',
})
export class CommonPopupComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<any>
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close()
  }

}
