import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class RouterStorageService {
    
    private storageSource = new BehaviorSubject<any>(null);
    storage$: Observable<any> = this.storageSource.asObservable();

    public setData(data: any) {
        this.storageSource.next(data);
    }

    public getAndFlushData() {

        let data = this.storageSource.getValue();
       this.storageSource.next(null);

        return data;
    }
}