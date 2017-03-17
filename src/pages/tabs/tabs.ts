import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuPage } from '../../pages/menu/menu';
import { HomePage } from '../../pages/home/home';
import { MedicinesPage } from '../../pages/medicines/medicines';
import { LoginPage } from '../../pages/login-page/login-page';
import { MyAccountPage } from '../../pages/my-account/my-account';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
	homeTab: any;
	uploadTab: any;
	medicineTab: any;
	accountTab: any;
	index: any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	this.homeTab = HomePage;
	this.medicineTab = MedicinesPage;
	this.accountTab = MyAccountPage;
	this.index = 0;
	//this.index=this.navParams.get('index');
	console.log(this.index);
	
  }
	
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
