import { NgModule } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [MatDialogModule],
  declarations: [DialogComponent],
  providers: [],
  exports: [DialogComponent]
})
export class DialogComponentModule {


}
