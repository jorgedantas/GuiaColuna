import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HttpModule } from '@angular/http';
import { SignupPage } from '../pages/signup/signup';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AgendaPage } from '../pages/agenda/agenda';
import { ConsultarJogo } from '../pages/jogo/consultar/consultarjogo';
import { CadastrarJogo } from '../pages/jogo/cadastrar/cadastrarjogo';
import { JogadorPage } from '../pages/jogador/jogador';
import { SobrePage } from '../pages/sobre/sobre';
import { TabsPage } from '../components/tabs/tabs';
import { HistoricoPage } from '../pages/historico/historico';
import { TemporadaPage } from '../pages/temporada/temporada';
import { CervicalgiaPage } from '../pages/cervicalgia/cervicalgia';
import { CervicalgiaIntervencaoPage } from '../pages/cervicalgiaintervencao/cervicalgiaintervencao';
import { AdmativaPage } from '../pages/cervicalgia/admativa/admativa';
import { AdmativaPage2 } from '../pages/cervicalgiaintervencao/admativa/admativa';

import { PopUp02Page } from '../pages/lombalgiadiagnostico/popup/popup';
import { PopUp01Page } from '../pages/lombalgiaintervencao/popup/popup';

import { LombalgiaIntervencaoPage } from '../pages/lombalgiaintervencao/lombalgiaintervencao';
import { LombalgiaDiagnosticoPage } from '../pages/lombalgiadiagnostico/lombalgiadiagnostico';
import { LombalgiaMenuPage } from '../pages/lombalgiamenu/lombalgiamenu';



export const environment = {
  firebase: {
    apiKey: "AIzaSyAl-Z7IcA_dO4RZaGHATIWc6XZ4A7XqQ2k",
    authDomain: "fisio-78ebf.firebaseapp.com",
    databaseURL: "https://fisio-78ebf.firebaseio.com",
    projectId: "fisio-78ebf",
    storageBucket: "fisio-78ebf.appspot.com",
    messagingSenderId: "632897393169"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AgendaPage,
    ConsultarJogo,
    CadastrarJogo,
    JogadorPage,
    SobrePage,
    HistoricoPage,
    TemporadaPage,
    TabsPage,
    CervicalgiaPage,
    CervicalgiaIntervencaoPage,
    AdmativaPage,
    AdmativaPage2,
    LombalgiaIntervencaoPage,
    LombalgiaDiagnosticoPage,
    PopUp02Page,PopUp01Page,
    LombalgiaMenuPage,
    SignupPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AgendaPage,
    ConsultarJogo,
    CadastrarJogo,
    JogadorPage,
    SobrePage,
    HistoricoPage,
    TemporadaPage,
    TabsPage,
    CervicalgiaPage,
    CervicalgiaIntervencaoPage,
    AdmativaPage,
    AdmativaPage2,
    LombalgiaIntervencaoPage,
    LombalgiaDiagnosticoPage,
    PopUp02Page,PopUp01Page,
    SignupPage,
    LombalgiaMenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
