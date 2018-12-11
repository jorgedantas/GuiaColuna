import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CervicalgiaPage } from '../cervicalgia/cervicalgia';
import { CervicalgiaIntervencaoPage } from '../cervicalgiaintervencao/cervicalgiaintervencao';

import { ModalController,ViewController  } from 'ionic-angular';


@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html'
})
export class SobrePage { 
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) { 
  }
  

  openModal() {
    const modal = this.modalCtrl.create(CervicalgiaPage);
    modal.present();
  }


  openModalintervencao() {
    const modal = this.modalCtrl.create(CervicalgiaIntervencaoPage);
    modal.present();
  }



  cervicalgia() {
    
    this.navCtrl.push(CervicalgiaPage);
  }
}
