import { Component, OnInit, OnDestroy } from '@angular/core';
declare var $: any;

//--
import { InterfaceComponent } from '@app/interfaces';
import { ThemesService } from '@app/core';
import { AppPreferences } from '@app/models';

@Component({
    selector: 'app-offsidebar',
    templateUrl: './offsidebar.component.html',
    styleUrls: ['./offsidebar.component.scss']
})
export class OffsidebarComponent extends InterfaceComponent implements OnInit, OnDestroy {

    currentTheme: any;
    clickEvent = 'click.offsidebar';
    $doc: any = null;
    appPreferences: AppPreferences = new AppPreferences();

    constructor(public themes: ThemesService) {
        super();

        this.currentTheme = themes.getDefaultTheme();
    }

    ngOnInit() {
        this.appPreferences = new AppPreferences();

        this.anyClickClose();
    }

    setTheme() {
        this.themes.setTheme(this.currentTheme);
    }

    anyClickClose() {
        this.$doc = $(document).on(this.clickEvent, (e) => {
            if (!$(e.target).parents('.offsidebar').length) {
                this.appPreferences['offsidebarOpen'] = false;
            }
        });
    }

    ngOnDestroy() {
        if (this.$doc)
            this.$doc.off(this.clickEvent);
    }
}
