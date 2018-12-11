

import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController,ViewController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { ModalController  } from 'ionic-angular';
/**
 * Generated class for the AdmativaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popup',
  templateUrl: 'popup.html'
})
export class PopUp01Page {

  text: string;
  


  public Video: string
  
  public Descricao : string

  public Titulo : string


  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private alertCtrl: AlertController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    loader.dismiss();

   
    this.Video =  this.navParams.get('vide');
    this.Descricao =  this.navParams.get('desc');
    this.Titulo =  this.navParams.get('tite');

   // console.log( this.Video);
   // console.log(this.Descricao);
   // console.log(this.Titulo);


    
    //document.getElementById("codigohtml").innerHTML = codigohtml;

   // this.divhtml = codigohtml;
  }
  
  ionViewDidLoad() {
   // var v =
   // var d = this.Descricao;
    //var t = this.Titulo;


    document.getElementById('Video').innerHTML =  this.Video;
    //document.getElementById('Descricao').innerHTML = d;
    //document.getElementById('Titulo').innerHTML = t;


  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }

}


