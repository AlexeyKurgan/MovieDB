import { MatDialogConfig } from "@angular/material/dialog";

export class CommonPopupConfig {
    config: MatDialogConfig = {
        disableClose: false,
        hasBackdrop: true,
        backdropClass: '',
        width: '425px',
        height: '',
        position: {
            top: '10vh',
            bottom: '',
            left: '',
            right: ''
        }
    };

}