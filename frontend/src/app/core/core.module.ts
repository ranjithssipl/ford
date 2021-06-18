import { NgModule, Optional, SkipSelf, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';

// --
import { throwIfAlreadyLoaded } from '@app/core/module-import-guard';
import { ThemesService } from '@app/core/themes/themes.service';
import { MenuService } from '@app/core/menu/menu.service';
import { RouterStorageService } from '@app/core/router/router-storage.service';



export const appInitializer = {
    provide: APP_INITIALIZER,
    multi: true
}

// Loading locale data for en-IN
import localeEnIN from '@angular/common/locales/en-IN';
registerLocaleData(localeEnIN);

@NgModule({
    imports: [
        RouterModule
    ],
    providers: [
        ThemesService,
        MenuService,
        RouterStorageService
    ],
    declarations: [
    ],
    exports: [
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}

