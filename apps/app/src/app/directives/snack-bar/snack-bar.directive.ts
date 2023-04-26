import { Directive, HostListener, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({ selector: '[showSnackbarOnClick]' })
export class SnackBarDirective {

    constructor(private _snackBar: MatSnackBar) { }

    @Input() showSnackbarOnClick?: string;

    @HostListener('click')
    onClicked() {
        if (this.showSnackbarOnClick) {
            this._snackBar.open(this.showSnackbarOnClick);
        }
    }
}
