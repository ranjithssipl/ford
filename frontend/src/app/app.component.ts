import { Component, HostBinding, OnInit, Inject, LOCALE_ID } from '@angular/core';
declare var $: any;

//--
import { InterfaceComponent } from '@app/interfaces';
import { AppPreferences } from '@app/models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends InterfaceComponent implements OnInit {
    appPreferences: AppPreferences = new AppPreferences();

    @HostBinding('class.layout-fixed') get isFixed() { return this.appPreferences.isFixed; };
    @HostBinding('class.aside-collapsed') get isCollapsed() { return this.appPreferences.isCollapsed; };
    @HostBinding('class.layout-boxed') get isBoxed() { return this.appPreferences.isBoxed; };
    @HostBinding('class.layout-fs') get useFullLayout() { return this.appPreferences.useFullLayout; };
    @HostBinding('class.hidden-footer') get hiddenFooter() { return this.appPreferences.hiddenFooter; };
    @HostBinding('class.layout-h') get horizontal() { return this.appPreferences.horizontal; };
    @HostBinding('class.aside-float') get isFloat() { return this.appPreferences.isFloat; };
    @HostBinding('class.offsidebar-open') get offsidebarOpen() { return this.appPreferences.offsidebarOpen; };
    @HostBinding('class.aside-toggled') get asideToggled() { return this.appPreferences.asideToggled; };
    @HostBinding('class.aside-collapsed-text') get isCollapsedText() { return this.appPreferences.isCollapsedText; };

    constructor(
        @Inject(LOCALE_ID) locale: string
    ) {
        super();
        console.log(locale);
    }

    ngOnInit() {
        $(document).on('click', '[href="#"]', e => e.preventDefault());

        this.appPreferences = new AppPreferences();
    }
}
