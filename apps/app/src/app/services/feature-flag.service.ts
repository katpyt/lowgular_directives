import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { FeatureFlagModel } from '../models/feature-flag.model';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
    constructor(private _httpClient: HttpClient) {
    }

    getFeatureFlags(): Observable<FeatureFlagModel[]> {
        return this._httpClient.get<FeatureFlagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags');
    }

    hasFeatureFlags(featureFlagName: string): Observable<boolean> {
        return this._httpClient.get<FeatureFlagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/feature-flags')
            .pipe(
                map((list) => Object.values(list).some(el => el.name === featureFlagName))
            );
    }
}
