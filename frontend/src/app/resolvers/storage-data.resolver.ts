import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';


//--
import { RouterStorageService } from '@app/core';

@Injectable()
export class StorageDataResolver implements Resolve<any> {
    
    constructor(
        private router: Router,
        private routerStorage: RouterStorageService
    ) { 
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any | null> {

        let data = this.routerStorage.getAndFlushData();

        if (data) return <any>data;
        else {
            this.router.navigate(['/error', 'not-found']);
            return null;
        }

    }
}