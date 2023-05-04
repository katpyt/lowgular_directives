import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Directive({ selector: '[moveable]' })

export class MovableDirective {
    constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {
        // document.addEventListener('mousemove', onmousemove(this._elementRef.nativeElement));
    }

    public offsetX = 0;
    public offsetY = 0;
    public isClicked = false;

    @HostListener('mousedown')
    handleMouseDown(event: MouseEvent) {
        this.isClicked = true;
        console.log("down");
        this.offsetX = this._elementRef.nativeElement.offsetLeft;
        this.offsetY = this._elementRef.nativeElement.offsetTop;
        console.log("offsetX [" + this.offsetX + "], offsetY [" + this.offsetY + "]");
    }

    @HostListener('mouseup')
    handleMouseUp(event: MouseEvent) {
        this.isClicked = false;
        console.log("down");
        this.offsetX = this._elementRef.nativeElement.offsetLeft;
        this.offsetY = this._elementRef.nativeElement.offsetTop;
        console.log("offsetX [" + this.offsetX + "], offsetY [" + this.offsetY + "]");
    }

    @HostListener('mousemove')
    onmousemove(e: MouseEvent) {
        // const localX = event.clientX;
        // const localY = event.clientY;
        if (this.isClicked) {
            console.log("move");
            this._renderer2.setProperty(
                this._elementRef.nativeElement,
                'ng-style',
                `transform: translate3d(${e.clientX}px,${e.clientY}px,0)`
            );
        }
    }


}
function logKey(e: MouseEvent) {
    console.log(`Screen X/Y: ${e.screenX}, ${e.screenY}`);
    console.log(`Client X / Y: ${e.clientX}, ${e.clientY}`);
}

