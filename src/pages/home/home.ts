import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AgendaPage } from '../agenda/agenda';
import { CadastrarJogo } from '../jogo/cadastrar/cadastrarjogo';
import { JogadorPage } from '../jogador/jogador';
import { SobrePage } from '../sobre/sobre';
import { HistoricoPage } from '../historico/historico';
import { AngularFireAuth } from 'angularfire2/auth';
import { LombalgiaMenuPage } from '../lombalgiamenu/lombalgiamenu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: string;
  public color: string = "blue";
  public profileTab: any;
  public loginTab: any;

  constructor(public navCtrl: NavController,private afAuth: AngularFireAuth,) {   
    this.loginTab = LoginPage;
  }

  autentication() {
    this.navCtrl.setRoot(LoginPage);
  }

  agenda() {
    this.navCtrl.push(AgendaPage);
  }
  cadastrarJogo() {
    this.navCtrl.push(CadastrarJogo);
  }
  cadastrarJogador() {
    this.navCtrl.push(JogadorPage);
  }
  sobre() {
    this.navCtrl.push(SobrePage);
  }

  historico(){
    this.navCtrl.push(LombalgiaMenuPage);
  }
  lombalgia(){
    this.navCtrl.push(HistoricoPage);
  }
  sair(){
    this.afAuth.auth.signOut(); 
    this.navCtrl.setRoot(LoginPage);
  }
}
