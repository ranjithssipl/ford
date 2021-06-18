import { defaultAppPreferences } from '@app/core/settings/config';

export class AppPreferences {
    applicationTheme: 'A'|'B'|'C'|'D'|'E'|'F'|'G'|'H';

    isFixed: boolean;
    isCollapsed: boolean;
    isBoxed: boolean;
    isRTL: boolean;
    horizontal: boolean;
    isFloat: boolean;
    asideHover: boolean;
    theme: boolean;
    asideScrollbar: boolean;
    isCollapsedText: boolean;
    useFullLayout: boolean;
    hiddenFooter: boolean;
    offsidebarOpen: boolean;
    asideToggled: boolean;
    viewAnimation: string;

    constructor(settings?: Object) {
        if(!(settings instanceof Object)) settings = {};
        this.applicationTheme = settings['applicationTheme'] || defaultAppPreferences['applicationTheme'];
        this.isFixed = settings['isFixed'] || defaultAppPreferences['isFixed'];
        this.isCollapsed = settings['isCollapsed'] || defaultAppPreferences['isCollapsed'];
        this.isBoxed = settings['isBoxed'] || defaultAppPreferences['isBoxed'];
        this.isRTL = settings['isRTL'] || defaultAppPreferences['isRTL'];
        this.horizontal = settings['horizontal'] || defaultAppPreferences['horizontal'];
        this.isFloat = settings['isFloat'] || defaultAppPreferences['isFloat'];
        this.asideHover = settings['asideHover'] || defaultAppPreferences['asideHover'];
        this.theme = settings['theme'] || defaultAppPreferences['theme'];
        this.asideScrollbar = settings['asideScrollbar'] || defaultAppPreferences['asideScrollbar'];
        this.isCollapsedText = settings['isCollapsedText'] || defaultAppPreferences['isCollapsedText'];
        this.useFullLayout = settings['useFullLayout'] || defaultAppPreferences['useFullLayout'];
        this.hiddenFooter = settings['hiddenFooter'] || defaultAppPreferences['hiddenFooter'];
        this.offsidebarOpen = settings['offsidebarOpen'] || defaultAppPreferences['offsidebarOpen'];
        this.asideToggled = settings['asideToggled'] || defaultAppPreferences['asideToggled'];
        this.viewAnimation = settings['viewAnimation'] || defaultAppPreferences['viewAnimation'];
    }
}

