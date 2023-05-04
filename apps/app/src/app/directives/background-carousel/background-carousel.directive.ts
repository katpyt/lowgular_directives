import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable, map, switchMap } from 'rxjs';

@Directive({ selector: '[bgCarousel]' })
export class BackgroundCarouselDirective implements OnChanges {
    private _colorsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    }

    @Input() bgCarousel?: string[]; //= ['rgb(255, 0, 255)', 'rgb(0, 255, 255)', 'rgb(255, 255, 0)'];

    @HostListener('document: keyup', ['$event'])
    setColor(event: KeyboardEvent) {
        const arrowEvents = ['ArrowLeft', 'ArrowRight'];
        console.log(event.key);
        if (arrowEvents.includes(event.key) && this.bgCarousel) {
            if (event.key === 'ArrowRight') {
                this._colorsSubject.next(this._colorsSubject.value + 1 > this.bgCarousel.length - 1 ? 0 : this._colorsSubject.value + 1);
            }
            if (event.key === 'ArrowLeft') {
                this._colorsSubject.next(this._colorsSubject.value - 1 < 0 ? this.bgCarousel.length - 1 : this._colorsSubject.value - 1);
            }
            this._renderer2.setStyle(
                this._elementRef.nativeElement,
                'background-color',
                this.bgCarousel[this._colorsSubject.value]
            );
        }
    }


    // ngOnInit(): void {
    //     if (this.bgCarousel) {
    //         console.log('this._colorsSubject.value [' + this._colorsSubject.value + ']');
    //         this._renderer2.setStyle(
    //             this._elementRef.nativeElement,
    //             'background-color',
    //             this.bgCarousel[this._colorsSubject.value]
    //         );
    //     }
    // }

    ngOnChanges() {
        if (this.bgCarousel) {
            this._renderer2.setStyle(
                this._elementRef.nativeElement,
                'backgroundColor',
                this.bgCarousel[this._colorsSubject.value])
        }
    }
}