import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MedicinesPage } from '../pages/medicines/medicines';
import { LoginPage } from '../pages/login-page/login-page';
import { MyAccountPage } from '../pages/my-account/my-account';

@NgModule({
  declarations: [
    MyApp,
	LoginPage,
	LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
	MyAccountPage,
    TabsPage,
	MedicinesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
	LoginPage,
    AboutPage,
    ContactPage,
    HomePage,
	MyAccountPage,
    TabsPage,
	MedicinesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
