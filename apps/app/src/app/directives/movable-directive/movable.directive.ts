import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({ selector: '[moveable]' })

export class MovableDirective {
    constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
    }

    private offsetX = 0;
    private offsetY = 0;

    @HostListener('click')
    handleMouseDown(event: MouseEvent) {
        // const localX = event.clientX - event.target.offsetLeft;
        // const localY = event.clientY - event.target.offsetTop;
        // localMousePos = { x: localX, y: localY };

        console.log(event);
        console.log("move");
        this.offsetX = event.clientX;
        this.offsetY = event.clientY;
        console.log("offsetX [" + this.offsetX + "]");
    }

    @HostListener('mousemove')
    onmousemove() {

        this._renderer2.setProperty(
            this._elementRef.nativeElement,
            'ng-style',
            `transform: translate3d(${this.offsetX},${this.offsetY},0)`
        );
    }


}
