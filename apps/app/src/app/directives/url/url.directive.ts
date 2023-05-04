import { Directive, ElementRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: 'input[type=url][formControlName],input[type=url][formControl],input[type=url][ngModel]',
    providers: [{ provide: NG_VALIDATORS, useExisting: UrlDirective, multi: true }]
})
export class UrlDirective implements Validator {
    constructor(private _elementRef: ElementRef) {

    }

    validate(control: AbstractControl): ValidationErrors | null {

        // Empty value: valid
        // String not starting with `http://` or `https://` should give `mustStartWithHttpOrHttps` validation error
        // String not ending with `.[a-z]{2,}` should give `mustEndWithDotDomain` validation error

        if (!control.value) {
            return { valid: true };
        }
        else {
            const urlWithoutHttp = control.value.split('//');
            // const regex = new RegExp('/[a-z.]{1,}[a-z]{2,}/g');
            const regex = new RegExp('/.[a-z]{2,}/g');

            if (control.value.startsWith(`http://`) || control.value.startsWith(`https://`)) {

                if (!urlWithoutHttp[1] || !regex.test(urlWithoutHttp[1])) {
                    return { invalid: true, mustEndWithDotDomain: true };
                }
            }

            if (!regex.test(urlWithoutHttp[0])) {
                return { invalid: true, mustEndWithDotDomain: true, mustStartWithHttpOrHttps: true };
            }

            return { invalid: true, mustStartWithHttpOrHttps: true };

        }

        return { valid: true };
    }
}
