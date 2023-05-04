import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private _httpClient: HttpClient) {
    }

    deleteProduct(productId: number): Observable<ProductModel> {
        return this._httpClient.delete<ProductModel>(`https://fakestoreapi.com/products/${productId}`);
    }
}
