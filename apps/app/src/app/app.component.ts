import { Component } from '@angular/core';
import { ConfirmDialogComponent } from '../../src/app/components/confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {


  constructor(private test: ConfirmDialogComponent) {

  }
  onConfirmed($event: boolean) {
    console.log($event);
  }
}
