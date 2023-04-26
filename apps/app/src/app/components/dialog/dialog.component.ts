import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogComponent {
  readonly dialog = { title: "Confirm your choice", content: "abc" }


}

