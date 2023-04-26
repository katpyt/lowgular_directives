import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appMyRequired]', providers: [
        { provide: NG_VALIDATORS, useExisting: MyRequiredDirective, multi: true }
    ]
})
export class MyRequiredDirective implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        if (!control.value) {
            return null;
        }
        return { required: true }
    } test
}
