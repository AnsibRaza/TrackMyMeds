import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	myDate: String;
  constructor(public navCtrl: NavController) {
	let tzoffset: any = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
	let localISOTime: any = (new Date(Date.now() - tzoffset)).toISOString().slice(0,-1);
	this.myDate = localISOTime;
  }
  
  addMedicine(){
	
  }

}
