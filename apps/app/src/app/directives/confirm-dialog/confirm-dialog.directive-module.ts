import { NgModule } from '@angular/core';
import { ConfirmDialogComponentModule } from '../../components/confirm-dialog/confirm-dialog.component-module';
import { ConfirmDialogDirective } from './confirm-dialog.directive';

@NgModule({
  imports: [ConfirmDialogComponentModule],
  declarations: [ConfirmDialogDirective],
  providers: [],
  exports: [ConfirmDialogDirective]
})
export class ConfirmDialogDirectiveModule {

}
