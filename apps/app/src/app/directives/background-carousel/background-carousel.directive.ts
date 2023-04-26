import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({ selector: '[bgCarousel]' })
export class BackgroundCarouselDirective implements OnInit {

    constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    }

    private startColorIndex = 0;
    @Input() colors: string[] = ['rgb(0, 255, 255)', 'rgb(255, 0, 255)'];//, '#FFFF00', '#1E90FF'];

    @HostListener('click')
    bgCarousel(event: KeyboardEvent) {
        console.log("1");
        const arrowEvents = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (arrowEvents.includes(event.key)) {
            this._renderer2.setStyle(
                this._elementRef.nativeElement,
                'background-color',
                this.startColorIndex + 1 > this.colors.length
                    ? this.colors[0]
                    : this.colors[this.startColorIndex + 1]
            );
        }
    }

    ngOnInit(): void {
        this._renderer2.setStyle(
            this._elementRef.nativeElement,
            'background-color',
            this.colors[0]
        );
    }

}
