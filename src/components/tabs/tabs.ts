import { Component } from '@angular/core';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';
import { SobrePage } from '../../pages/sobre/sobre';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

 // tab1Root = LoginPage;
  tab2Root = LoginPage;
  //tab3Root = SobrePage;

  constructor() {

  }
}
