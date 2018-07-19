import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewPage} from "../new/new";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNewPage(){
    console.log("nieco som spravil");
    this.navCtrl.push(NewPage);
  }

}
