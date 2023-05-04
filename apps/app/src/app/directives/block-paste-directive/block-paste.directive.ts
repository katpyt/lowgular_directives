import { Directive, HostListener, Input } from '@angular/core';

@Directive({ selector: 'input[blockPaste],textarea[blockPaste]' })
export class BlockPasteDirective {

    // @Input() blockPaste?: HTMLElement;

    @HostListener("paste", ['$event'])
    onPaste(event: Event) {
        event.preventDefault();
    }
}
