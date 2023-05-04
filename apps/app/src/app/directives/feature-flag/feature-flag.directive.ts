import { Directive, ElementRef, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Observable, Subject, map, takeUntil } from 'rxjs';
import { FeatureFlagModel } from '../../models/feature-flag.model';
import { FeatureFlagService } from '../../services/feature-flag.service';

@Directive({ selector: '[featureFlag]' })

export class FeatureFlagDirective implements OnInit, OnDestroy {

    @Input() featureFlag?: string;
    @Input() featureFlagElse?: TemplateRef<any>;
    private _onDestroy: Subject<void> = new Subject();
    readonly featureFlagList$: Observable<FeatureFlagModel[]> = this._featureFlagService.getFeatureFlags();

    constructor(
        private _featureFlagService: FeatureFlagService,
        private _elementRef: ElementRef,
        private _templateRef: TemplateRef<undefined>,
        private _viewContainerRef: ViewContainerRef) {
    }

    ngOnInit(): void {
        this._featureFlagService
            .hasFeatureFlags(this.featureFlag || '')
            .pipe(takeUntil(this._onDestroy.asObservable()))
            .subscribe(
                (isVisible) => {
                    this._viewContainerRef.clear();
                    if (isVisible) {
                        this._viewContainerRef.createEmbeddedView(this._templateRef);
                    }
                    else {
                        if (this.featureFlagElse) {
                            this._viewContainerRef.createEmbeddedView(this.featureFlagElse);
                        }
                    }
                }
            );
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }
}
