import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { UserRolesModel } from '../models/user-roles.model';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private _httpClient: HttpClient) {
    }

    // hasRole(role: string): Observable<UserRolesModel[]> {
    //     return this._httpClient.get<UserRolesModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles')
    //         .pipe(
    //             map(roleList => roleList.filter(roleItem => roleItem.role === role)),
    //             catchError(() => [])
    //         );
    // }

    hasRole(role: string): Observable<boolean> {
        return of(role === 'user');
    }
}
