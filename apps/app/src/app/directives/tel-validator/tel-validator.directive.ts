import { Directive, ElementRef } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({ selector: '[appTelValidator]' })
export class TelValidatorDirective implements Validator {

    constructor(private _elementRef: ElementRef) {

    }

    validate(control: AbstractControl<any, any>): ValidationErrors | null {


        if (!control.value) {
            return { valid: true };
        }

        if (this._elementRef.nativeElement.getAttribute('pattern')) {
            const regex = new RegExp(this._elementRef.nativeElement.getAttribute('pattern'));
            if (!regex.test(control.value)) {
                return { invalid: true }
            }
        }

        return null;
    }

}
