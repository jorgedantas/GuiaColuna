import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LombalgiaDiagnosticoPage } from '../lombalgiadiagnostico/lombalgiadiagnostico';
import { LombalgiaIntervencaoPage } from '../lombalgiaintervencao/lombalgiaintervencao';

import { ModalController,ViewController  } from 'ionic-angular';


@Component({
  selector: 'page-lombalgiamenu',
  templateUrl: 'lombalgiamenu.html'
})
export class LombalgiaMenuPage { 
  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController) { 
  }
  

  openModalL01() {
    const modal = this.modalCtrl.create(LombalgiaDiagnosticoPage);
    modal.present();
  }


  openModalintervencao() {
    const modal = this.modalCtrl.create(LombalgiaIntervencaoPage);
    modal.present();
  }



  cervicalgia() {
    
    this.navCtrl.push(LombalgiaDiagnosticoPage);
  }
}
