import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Directive({ selector: '[confirmDialog]' })
export class ConfirmDialogDirective {

    constructor(private _dialog: MatDialog) {
    }

    @Input() confirmDialog = '';// = "Are you sure that you want to do this?"
    @Output() confirmed: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('click')
    showDialog() {
        const dialogRef = this._dialog.open(ConfirmDialogComponent,
            {
                data: {
                    message: this.confirmDialog
                }
            });

        dialogRef.afterClosed().subscribe(
            emittedValue => this.confirmed.emit(emittedValue)
        );
    };



    // confirmDialog() {
    //     console.log("yes");
    //     this._dialog.open(this._templateRef)
    //     // this._renderer.setAttribute(this._confirmDialog, '[mat-dialog-title]', 'Confirm your choice');
    //     // this._renderer.setAttribute(this._confirmDialog, '[mat-dialog-content]', this.data);
    //     // const confirmButton = this._renderer.createElement('mat-button');
    //     // const cancelButton = this._renderer.createElement('mat-button');
    //     // const div = this._renderer.createElement('div');
    //     // this._templateRef = div;
    //     // this._renderer.setAttribute(confirmButton, 'text', 'Confirm');
    //     // this._renderer.setAttribute(confirmButton, 'value', 'true');
    //     // this._renderer.setAttribute(cancelButton, 'text', 'Cancel');
    //     // this._renderer.setAttribute(cancelButton, 'value', 'false');
    //     // this._renderer.appendChild(this._confirmDialog, confirmButton);
    //     // this._renderer.appendChild(this._confirmDialog, cancelButton);

    //     // this._confirmDialog.open(div, {
    //     //     data: { message: this.data }
    //     // })
    // }

    // ngOnInit(): void {
    //     // const nativeElement = this._viewContainerRef.element.nativeElement;
    //     const button = this._renderer.createElement('button');
    //     this._renderer.setAttribute(button, '[data-test-id]', 'directive');
    //     const text = this._renderer.createText('Click');
    //     // const div = this._renderer.createElement('div');
    //     // const confirmButton = this._renderer.createElement('button');
    //     // const cancelButton = this._renderer.createElement('button');
    //     // this._renderer.setAttribute(div, '[mat-dialog-title]', 'Confirm your choice');
    //     this._renderer.appendChild(button, text);
    //     // this._renderer.appendChild(div, confirmButton);
    //     // this._renderer.appendChild(div, cancelButton);

    // }
}
