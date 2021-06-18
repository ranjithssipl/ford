import { Component, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    toasterConfig: ToasterConfig = new ToasterConfig({
        positionClass: 'toast-top-right',
        animation: 'fade',
        newestOnTop: true,
        timeout: 5000,
        showCloseButton: true
    });
    
    constructor() { }

    ngOnInit() {
    }
 
}
