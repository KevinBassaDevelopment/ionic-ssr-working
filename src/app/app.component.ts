import { Component, Inject, PLATFORM_ID } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public isBrowser = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    console.log('AppComponent constructor');
    this.initializeApp();
    if (isPlatformBrowser(this.platformId)) {
      this.isBrowser = true;
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      console.log('platform ready');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
