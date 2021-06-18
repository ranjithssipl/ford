// Library elements
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

const screenfull = require('screenfull');
const browser = require('jquery.browser');
declare var $: any;

//--
import { InterfaceComponent } from '@app/interfaces';
import { UserblockService } from '../sidebar/userblock/userblock.service';
import { MenuService } from '@app/core';
import { AppPreferences } from '@app/models';
import { SeriesService } from '@app/services';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends InterfaceComponent implements OnInit {

    navCollapsed = true; // for horizontal layout
    menuItems = []; // for horizontal layout

    isNavSearchVisible: boolean;
    @ViewChild('fsbutton') fsbutton;  // the fullscreen button

    appPreferences: AppPreferences = new AppPreferences();
    status = "Offline"

    constructor(
        private router: Router,
        public menu: MenuService,
        public userblockService: UserblockService,
        private seriesService: SeriesService
    ) {
        super();
        setInterval(() => {
            this.seriesService.getStatus().subscribe(resp =>{
                this.status = resp['status'];
            },
            error =>{
                this.status = "Offline";
            })
        }, 5000);
        // get menu items
        this.menuItems = menu.getMenu();
    }

    ngOnInit() {
        this.appPreferences = new AppPreferences();

        this.isNavSearchVisible = false;
        if (browser.msie) { // Not supported under IE
            this.fsbutton.nativeElement.style.display = 'none';
        }
    }

    toggleUserBlock(event) {
        event.preventDefault();
        this.userblockService.toggleVisibility();
    }

    openNavSearch(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setNavSearchVisible(true);
    }

    setNavSearchVisible(stat: boolean) {
        // console.log(stat);
        this.isNavSearchVisible = stat;
    }

    getNavSearchVisible() {
        return this.isNavSearchVisible;
    }

    toggleCollapsedSideabar() {
        this.appPreferences['isCollapsed'] = ! this.appPreferences['isCollapsed'];
    }

    isCollapsedText() {
        return  this.appPreferences['isCollapsedText'];
    }

    toggleFullScreen(event) {

        if (screenfull.enabled) {
            screenfull.toggle();
        }
        // Switch icon indicator
        let el = $(this.fsbutton.nativeElement);
        if (screenfull.isFullscreen) {
            el.children('em').removeClass('fa-expand').addClass('fa-compress');
        }
        else {
            el.children('em').removeClass('fa-compress').addClass('fa-expand');
        }
    }

}
