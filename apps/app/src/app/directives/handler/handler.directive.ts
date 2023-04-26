import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[appHandler]' })
export class HandlerDirective {
    @HostListener('appEmitter', ['$event'])
    handle(event: any) {
        console.log('Handler: I have it!', event);
    }
}
