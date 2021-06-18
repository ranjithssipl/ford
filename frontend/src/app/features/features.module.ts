import { NgModule } from '@angular/core';
import { MenuService } from '../core/menu/menu.service';
import { SharedModule } from '../shared/shared.module';
import { LayoutModule } from './layout/layout.module';

import { menu } from './menu';
import { featuresRouting } from './features.routing';

@NgModule({
    imports: [
        SharedModule,
        featuresRouting,
        LayoutModule
    ],
    declarations: [],
    exports: []
})

export class FeaturesModule {
    constructor(public menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
