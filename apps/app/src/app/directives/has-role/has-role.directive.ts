import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from '../../services/user.service';

@Directive({ selector: '[hasRole]' })
export class HasRoleDirective implements OnInit, OnDestroy {
    @Input() hasRole?: string;
    @Input() hasRoleElse?: TemplateRef<any>;
    private _onDestroy: Subject<void> = new Subject();

    constructor(
        private _viewContainerRef: ViewContainerRef,
        private _templateRef: TemplateRef<any>,
        private _userService: UserService) {
    }

    ngOnInit(): void {
        this._userService
            .hasRole(this.hasRole || 'user')
            .pipe(takeUntil(this._onDestroy.asObservable()))
            .subscribe(
                (isVisible) => {
                    this._viewContainerRef.clear();
                    if (isVisible) {
                        this._viewContainerRef.createEmbeddedView(this._templateRef);
                    }
                    else {
                        if (this.hasRoleElse) {
                            this._viewContainerRef.createEmbeddedView(this.hasRoleElse);
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
