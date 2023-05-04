import { Directive, HostListener, Input } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Directive({ selector: '[deleteProduct]' })

export class DeleteProductDirective {

    @Input() deleteProduct?: number;

    constructor(private _productService: ProductService) {

    }

    @HostListener('click')
    onClicked() {
        // console.log('deleteProductDirective');
        // console.log('this.deleteProduct [' + this.deleteProduct + ']');
        if (this.deleteProduct) {
            this._productService.deleteProduct(this.deleteProduct).subscribe();
        }
    }
}
