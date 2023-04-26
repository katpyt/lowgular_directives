import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[appExample]' })
export class ExampleDirective {
    constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    }

    @HostListener('mouseover')
    handleMouseOver() {
        this._renderer2.setStyle(
            this._elementRef.nativeElement,
            'background-color',
            '#ff0000')
    }

    @HostListener('mouseout')
    handleMouseOut() {
        this._renderer2.setStyle(
            this._elementRef.nativeElement,
            'background-color',
            null)
    }

}
