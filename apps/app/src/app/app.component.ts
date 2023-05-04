import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'lowgular-acms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly formCtrl: FormControl = new FormControl('');
  readonly formCtrlTel: FormControl = new FormControl('');
  readonly form: FormGroup = new FormGroup({ formCtrl: new FormControl() });

  constructor(private test: ConfirmDialogComponent) {

  }
  onConfirmed($event: boolean) {
    console.log($event);
  }

  onFormSubmitted() {

  }



}
