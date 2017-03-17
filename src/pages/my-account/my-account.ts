import { Component } from '@angular/core';
import {AlertController, NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import localforage from "localforage";


/*
  Generated class for the MyAccount page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html'
})
export class MyAccountPage {
	public value: any;
	public cEmailInput: any;
	public nEmailInput: any;
	public passwordInput: any;
	public token: any;
	public valuepass: any;
	public cPasswordInput: any;
	public nPasswordInput: any;
	public val1:any;
	public val2: any;
	
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }

  onChangeEmail(val){
	if (val == '1') {
      this.value = 1; 
    } else if (val == '0'){
      this.value = 0; 
    }
  }
  
  onChangePassword(val){
	if (val == '1') {
      this.valuepass = 1; 
    } else if (val == '0'){
      this.valuepass = 0; 
    }
  }
  
  submitData(){
	if(this.val1){
		
	}
			
	if(this.val2){
	
			
	}
  }
  
  presentAlert(title, message) {
  let alert = this.alertCtrl.create({
	cssClass: 'alertClass', 
	title: title,
    subTitle: message,
    buttons: ['OK']
  });
  this.navCtrl.push(alert);
}
  
  reloadPage(){
	this.navCtrl.pop();
	this.navCtrl.push(MyAccountPage);
  }
  
  
  
  
  
}
