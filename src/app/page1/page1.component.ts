import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(
    private navCtrl: NavController, ) { }

  ngOnInit() {
  }


  public onBtnClicked() {
    // this.router.navigate(['page1']);
     this.navCtrl.back();
   }

}
