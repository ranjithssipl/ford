import { Injectable } from '@angular/core';

const themeA = require('@app/shared/styles/themes/theme-a.scss');
const themeB = require('@app/shared/styles/themes/theme-b.scss');
const themeC = require('@app/shared/styles/themes/theme-c.scss');
const themeD = require('@app/shared/styles/themes/theme-d.scss');
const themeE = require('@app/shared/styles/themes/theme-e.scss');
const themeF = require('@app/shared/styles/themes/theme-f.scss');
const themeG = require('@app/shared/styles/themes/theme-g.scss');
const themeH = require('@app/shared/styles/themes/theme-h.scss');

//--
import { defaultAppPreferences } from '../settings/config';

@Injectable()
export class ThemesService {

    styleTag: any;
    defaultTheme: string = defaultAppPreferences.applicationTheme;

    constructor() {
        this.createStyle();
        this.setTheme(this.defaultTheme);
    }

    private createStyle() {
        const head = document.head || document.getElementsByTagName('head')[0];
        this.styleTag = document.createElement('style');
        this.styleTag.type = 'text/css';
        this.styleTag.id = 'appthemes';
        head.appendChild(this.styleTag);
    }

    setTheme(name) {
        switch (name) {
            case 'A':
                this.injectStylesheet(themeA);
                break;
            case 'B':
                this.injectStylesheet(themeB);
                break;
            case 'C':
                this.injectStylesheet(themeC);
                break;
            case 'D':
                this.injectStylesheet(themeD);
                break;
            case 'E':
                this.injectStylesheet(themeE);
                break;
            case 'F':
                this.injectStylesheet(themeF);
                break;
            case 'G':
                this.injectStylesheet(themeG);
                break;
            case 'H':
                this.injectStylesheet(themeH);
                break;
            default:
                this.injectStylesheet(themeA);
                break;
        }
    }

    injectStylesheet(css) {
        this.styleTag.innerHTML = css;
    }

    getDefaultTheme() {
        return this.defaultTheme;
    }

}
