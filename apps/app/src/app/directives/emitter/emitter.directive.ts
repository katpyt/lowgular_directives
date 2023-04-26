import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

export class Foo {
    constructor(public name: string) { }
}

@Directive({ selector: '[appEmitter]' })
export class EmitterDirective {

    @Output() appEmitter: EventEmitter<{ name: string }> = new EventEmitter<{
        name: string;
    }>();
    @HostListener('click')
    // click() {
    //     console.log('appEmitter: click')
    //     this.appEmitter.emit({ name: 'John' })
    // }hdfh
    click() {
        console.log('appEmitter: clicked')
        this.appEmitter.emit(new Foo('Kate'))
    }

}
