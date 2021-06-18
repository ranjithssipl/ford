/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OffsidebarComponent } from './offsidebar.component';
import { TranslateService, TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { SettingsService } from '@app/core/settings/settings.service';
import { ThemesService } from '@app/core/themes/themes.service';
import { TranslatorService } from '@app/core/translator/translator.service';
import { SharedModule } from '@app/shared/shared.module';
import { createTranslateLoader } from '@app/app.module';

describe('Component: Offsidebar', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot({
                    loader: {
                        provide: TranslateLoader,
                        useFactory: (createTranslateLoader),
                        deps: [HttpClient]
                    }
                }),
                HttpClientModule,
                SharedModule
            ],
            providers: [SettingsService, ThemesService, TranslatorService]
        }).compileComponents();
    });

    it('should create an instance', async(inject([SettingsService, ThemesService, TranslatorService],
        (settingsService, themesService, translatorService) => {
            let component = new OffsidebarComponent(settingsService, themesService, translatorService);
            expect(component).toBeTruthy();
        })));
});
