import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private iab: InAppBrowser) {}
  pkg: any;
  
  openInAppGallery(){
   // this.iab.create
   window.open( "market://details?id=" + this.pkg, '_blank');
  }

}
