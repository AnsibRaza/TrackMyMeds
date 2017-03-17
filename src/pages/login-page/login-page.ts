import { Component } from '@angular/core';
import {AlertController, IonicApp, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {Storage} from '@ionic/storage';
import localforage from "localforage";
import { TabsPage } from '../tabs/tabs';
import { MenuController } from 'ionic-angular';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html'
})
export class LoginPage{
	public token: any;
	public emailInput: any;
	public passwordInput: any;
	public data: any;
	public name: any;
	public email: any;
	public tempToken: any;
	
  constructor(public navCtrl: NavController, public app: IonicApp,  public alertCtrl: AlertController, public navParams: NavParams, public menuCtrl: MenuController) {
		this.navCtrl = navCtrl;
  }
  
  login(){
	/* this.service.login(this.emailInput, this.passwordInput).then((token) => {
		if(token){
			console.log('method login of login-page (after)', token);
			this.navCtrl.setRoot(TabsPage, {index: 0});
			//this.getPersonalInfo(token);
		} else {
			console.log('Not ok');
		}
	}) */
	this.navCtrl.setRoot(TabsPage, {index: 0});
  }
  
  getPersonalInfo(token){
	/*	this.service.getPersonalInfoService(token).then((data) => {
		if(data){
			this.name = data[0]['username'];
			this.email = data[0]['email'];
		} else {
			console.log('personal info not received.');
		}
	}) */
	}
	
 
 forgotPassword(){
	//this.navCtrl.push(ForgotPasswordPage);
 }
 
 successAlert(title, message) {
  let alert = this.alertCtrl.create({
	cssClass: 'successAlertClass', 
	title: title,
    subTitle: message,
    buttons: ['OK']
  });
  this.navCtrl.push(alert);
}
 
 failuerAlert(title, message) {
  let alert = this.alertCtrl.create({
	title: title,
    subTitle: message,
    buttons: ['OK']
  });
  this.navCtrl.push(alert);
}
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }

}
