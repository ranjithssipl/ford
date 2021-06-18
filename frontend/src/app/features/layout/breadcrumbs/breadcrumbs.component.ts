import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { McBreadcrumbsService, McBreadcrumbsConfig } from 'ngx-breadcrumbs';

//--
import { InterfaceComponent } from '@app/interfaces';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent extends InterfaceComponent implements OnInit {
  crumbs: Array<{ text: string; path: string }> = [];

  constructor(
    private mcBreadcrumbsService: McBreadcrumbsService,
    private mcBreadcrumbsConfig: McBreadcrumbsConfig,
    private route: ActivatedRoute
  ) {
    super();

    // Breadcrumbs modifications after construction
    this.mcBreadcrumbsConfig.postProcess = (crumbs) => {

      let modified = crumbs;
      
      let params = {};
      let getChildParams = (child) => {
        params = Object.assign(params, child.snapshot.params);
        if (child.firstChild) getChildParams(child.firstChild);
      };
      getChildParams(this.route);

      modified.map(c => {
        // Replace underscores with space
        c.text = c.text.replace(/[_]+(.)?/g, (match, text) => { return ` ${match[1].toLocaleUpperCase()}`; });

        // Replace params 
        c.text = c.text.replace(/:(\w+)/g, (match, text) => { return params[text]? params[text][0].toLocaleUpperCase() + params[text].slice(1):''; });

        return c;
      });

      // Ensure that the first breadcrumb always points to home
      if (crumbs.length && crumbs[0].text !== 'Home') {
        modified = [
          {
            text: '<span class="icon-home"></span>',
            path: '/'
          }
        ].concat(crumbs.slice(1));
      }

      return modified;
    };

  }

  ngOnInit() {
    this.subscriptions['mcBreadcrumbs'] = this.mcBreadcrumbsService.crumbs$.subscribe(crumbs => {
      this.crumbs = crumbs;
    });
  }

  isLastCrumb(index: number) {
    return this.crumbs.length > 0 ? index + 1 === this.crumbs.length : false;
  }

}
