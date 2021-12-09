import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  tab1Icon = 'home';
  tab2Icon = 'search-outline';
  tab3Icon = 'document-text-outline';
  tab4Icon = 'person-outline';

  constructor() { }

  onMenuSwitch(index) {
    switch (index) {
      case 1:
        this.tab1Icon = 'home';
        this.tab2Icon = 'search-outline';
        this.tab3Icon = 'document-text-outline';
        this.tab4Icon = 'person-outline';
        break
      case 2:
        this.tab1Icon = 'home-outline';
        this.tab2Icon = 'search';
        this.tab3Icon = 'document-text-outline';
        this.tab4Icon = 'person-outline';
        break
      case 3:
        this.tab1Icon = 'home-outline';
        this.tab2Icon = 'search-outline';
        this.tab3Icon = 'document-text';
        this.tab4Icon = 'person-outline';
        break
      case 4:
        this.tab1Icon = 'home-outline';
        this.tab2Icon = 'search-outline';
        this.tab3Icon = 'document-text-outline';
        this.tab4Icon = 'person';
        break
    }
  }

}
