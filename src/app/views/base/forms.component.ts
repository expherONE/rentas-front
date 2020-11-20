import { Component, } from '@angular/core';
import {AppModule} from '../../app.module'

@Component({
  templateUrl: 'forms.component.html'
})
export class FormsComponent {

  title : string = 'text';
  constructor() { }


  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

}
