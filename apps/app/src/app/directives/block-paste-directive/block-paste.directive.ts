import { Directive, HostListener } from '@angular/core';

@Directive({ selector: 'input[blockPaste],textarea[blockPaste]' })
export class BlockPasteDirective {

    @HostListener("paste")
    blockPaste(event: ClipboardEvent) {
        event.stopPropagation();
        event.preventDefault();
    }

}
