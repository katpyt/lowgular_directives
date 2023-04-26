import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleFormComponent } from './components/simple-form/simple-form.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SimpleFormComponentModule } from './components/simple-form/simple-form.component-module';
import { ConfirmDialogComponentModule } from './components/confirm-dialog/confirm-dialog.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'simple-form', component: SimpleFormComponent },
    { path: 'confirm-dialog', component: ConfirmDialogComponent }
  ]), SimpleFormComponentModule, ConfirmDialogComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
  test
}
