import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SnackBarDirective } from './snack-bar.directive';

@NgModule({
  imports: [MatSnackBarModule],
  declarations: [SnackBarDirective],
  providers: [],
  exports: [SnackBarDirective]
})
export class SnackBarDirectiveModule {

}
