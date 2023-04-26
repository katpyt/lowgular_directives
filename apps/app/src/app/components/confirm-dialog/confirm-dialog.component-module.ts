import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
  imports: [MatDialogModule],
  declarations: [ConfirmDialogComponent],
  providers: [],
  exports: [ConfirmDialogComponent]
})
export class ConfirmDialogComponentModule {
}
