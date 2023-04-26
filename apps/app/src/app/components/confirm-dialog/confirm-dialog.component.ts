import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  constructor(public dialog: MatDialog) { }

  readonly data = { title: "Confirm your choice", content: "Are you sure that you want to do this?" }


}


// @Component({
//   selector: 'dialog-animations-example-dialog',
//   templateUrl: 'dialog-animations-example-dialog.html',
// })
// export class DialogAnimationsExampleDialog {
//   constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
// }