import { MatDialogConfig } from '@angular/material/dialog';
import { Inject, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CommonPopupConfig } from './common-popup.config';
import { CommonPopupComponent } from './common-popup.component';

@Injectable({
  providedIn: 'root'
})
export class CommonPopupService {
  dialogRef!: MatDialogRef<any>;

  constructor(
    @Inject(MatDialog) private dialogService: MatDialog
  ) { }

  componentBasedPopup (component: any = CommonPopupComponent, 
                       data: any = {}, 
                       config: MatDialogConfig = (new CommonPopupConfig()).config) {
    let subject = new Subject();
    this.dialogRef = this.dialogService.open(component, config ? config : (new CommonPopupConfig()).config);
    this.dialogRef.componentInstance.value = data;
    this.dialogRef.afterClosed().subscribe(
        result => {
            subject.next(result);
            subject.complete();
        }
    );
    return subject;
  }

}
