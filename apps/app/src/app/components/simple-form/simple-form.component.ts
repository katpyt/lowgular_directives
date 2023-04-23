import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SimpleFormComponent {
  readonly form: FormGroup = new FormGroup({
    name: new FormControl(),
    surname: new FormControl()
  });

  onFormSubmitted(form: FormGroup): void {
  }
}
