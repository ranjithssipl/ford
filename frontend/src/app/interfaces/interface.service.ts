import { OnDestroy } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { HttpErrorResponse } from '@angular/common/http';

//--
import { GetApiurl } from '../core/settings/config';

export class InterfaceService {
    subscriptions: Object = {};
    // Creates http options for the data type
    public getHttpOptions(type: 'json' = 'json', auth: boolean = true): { headers: HttpHeaders } {
        let headers = new HttpHeaders({});

        switch (type) {
            case "json": {
                headers = headers.append('Content-Type', 'application/json');
                break;
            }
        }

        return {
            headers: headers
        };
    }

    // Handeling error
    protected handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body['error'] || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else if (error instanceof HttpErrorResponse) {
            errMsg = error.error ? error.error : error.toString();
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    protected getApiUrl(path: string, params?: Object) {
        return GetApiurl(path, params);
    }

    ngOnDestroy() {

        // Unsubscribe on service scope destroy
        Object.entries(this.subscriptions).forEach(
            ([name, subscription]) => subscription.unsubscribe()
        );
    }

}
