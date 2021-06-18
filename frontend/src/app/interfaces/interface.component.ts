import { OnDestroy } from '@angular/core';

export class InterfaceComponent {
    subscriptions: Object = {}; 

    ngOnDestroy() {

        // Unsubscribe on service scope destroy
        Object.entries(this.subscriptions).forEach(
            ([name, subscription]) => subscription.unsubscribe()
        );
    }

}