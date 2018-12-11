import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController,ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { AdmativaPage } from '../cervicalgia/admativa/admativa';
import { ModalController  } from 'ionic-angular';
@Component({
  selector: 'page-cervicalgia',
  templateUrl: 'cervicalgia.html'
})
export class CervicalgiaPage {

public Video01 = `  `;
public Descricao01 = `Solicitar ao paciente os movimentos ativos livres de flexão, extensão, inclinação lateral, e rotação do pescoço.
                    O paciente pode relatar dor ou incomodo durante a realização do movimento; pode se mensura o grau de amplitude de movimento com goniômetro.
   `;
public Titulo01 = `  EXAME - ADM ATIVA  `;


public Video02 = ` <iframe   width="340" height="315" src="https://www.youtube.com/embed/oBKQPucb-_U?autoplay=1" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
public Descricao02 = `Com o paciente deitado em prono, o terapeuta deve realizar flexão do pescoço ao mesmo tempo que rotacional a cervical do paciente para ambos os lados.
                      Sinais: o terapeuta poderá encontrar diminuição de movimento e ou dor de cabeça causada pela cervicalgia.
   `;
public Titulo02 = ` EXAME - TESTE DE FLEXÃO COM ROTAÇÃO CERVICAL  `;



public Video03 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/zMw7tb9LwHU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;

public Descricao03 = ` 

Paciente deitado em decúbito dorsal, será solicitado que o mesmo realize flexão da cervical.
Como mensurar: o terapeuta deve verificar se o paciente consegue levantar a cabeça e sustentar na posição, podendo também aplicar uma leve pressão sobre a região frontal para quantificar a força dos músculos flexores do pescoço.

`;

public Titulo03 = ` TESTE DE FORÇA: FLEXORES `;

public Video04 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/KUh0ASfhJd0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

public Descricao04 = ` 
Paciente deitado em decúbito dorsal, será solicitado que o mesmo realize flexão da cervical.
Como mensurar: o terapeuta deve verificar se o paciente consegue levantar a cabeça e sustentar na posição, podendo também aplicar uma leve pressão sobre a região frontal para quantificar a força dos músculos flexores do pescoço.

`;

public Titulo04 = ` TESTE ESPECIAL SPURLING TEST`;



public Video05 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/LF3PwklTHcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

public Descricao05 = ` O paciente poderá estar sentado ou deitado, o terapeuta deverá apoiar as mãos sobre a região occipital e realizar o movimento de tração.
Sinais: o paciente poderá indicar melhora dos sintomas de dor irradiada. Podendo indicar compressão do nervo ou até mesmo rupturas parciais.

`;

public Titulo05 = ` TESTE DE DISTRAÇÃO`;



public Video06 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

public Descricao06 = ` Pede-se para que o paciente realize o movimento de evacuação forçada, ou para que o mesmo realize o ato de tossir.
Sinais: o paciente poderá sinalizar exacerbação da dor, sendo irradiada ou não.

`;

public Titulo06 = ` TESTE DE VALSALVA`;



public Video07 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/ArI5Ylp_qzY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

public Descricao07 = ` Com o paciente deitado em prono, o terapeuta deve posicionar um biofeedback insuflado até 20mmhg entre o topo do pescoço e occipital (vertebras c1-c2). É solicitado que o paciente realize o movimento de flexão do pescoço até que o medidor do biofeedback suba de 2 em 2mmhg em um total de 5 repetições sendo assim marcando 22mmhg no primeiro e 30mmhg no último. O paciente deverá manter essa pressão por 3 a 5 segundos em cada estágio.
Sinais: a não realização do teste será indicativo de déficit de coordenação do movimento, além de analisar a força e resistência dos músculos profundos da flexão cervical.
Dica: observar durante a realização do teste se o paciente de fato realiza a flexão cervical ou se o mesmo compensa com o movimento de retração da cabeça. `;

public Titulo07 = ` TESTE DE FLEXÃO CERVICAL`;


public Video08 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/mA9Q31XUr84" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

public Descricao08 = ` Paciente deitado em prono, será solicitado que o mesmo realize a flexão de pescoço afastando a cabeça da maca até 1 ou 2 cm de distância. O terapeuta deve colocar sua mão entre a maca e a cabeça do paciente.
Sinais: o terapeuta irá perceber se o paciente tenta repousar sua cabeça sobre a mão dele por 2 segundos ou mais, ou se o mesmo tem controle para manter a distância. Além de testar a resistência dos músculos flexores do pescoço, verifica também se há déficit de coordenação.
 `;

public Titulo08 = ` TESTE DE RESISTÊNCIA DOS MUSCULOS FLEXORES DO PESCOÇO`;



public Video09 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/6pOGOxPkj54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;

public Descricao09 = ` 

Paciente deitado com a cabeça fora da maca, deve ser solicitado que o mesmo realize extensão da cervical.
Como mensurar: o terapeuta deve verificar se o paciente consegue levantar a cabeça e sustentar na posição, podendo também ser aplicada uma leve pressão sobre a região occipital para quantificar a força dos músculos extensores do pescoço.


`;

public Titulo09 = ` TESTE DE FORÇA: EXTENSORES `;



public Video10 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/_DHpXz0uTrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;

public Descricao10 = ` 
Com o paciente posicionado em decúbito dorsal, o terapeuta deverá palpar com suas polpas digitas os processos transversos das vertebras c1 a c6 e realizar pressão com os dedos ao mesmo tempo que rotaciona a cervical para ambos os lado.
Sinais: o terapeuta poderá encontrar diminuição ou bloqueio do movimento para um ou ambos os lados de algumas vertebras, podendo estar relacionadas a presença ou diminuição da dor de cabeça durante a palpação.`;

public Titulo10 = ` TESTE DE MOBILIDADE DAS VERTEBRAS CERVICAIS `;



public Video11 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;

public Descricao11 = ` Indice de incapacidade relacionada ao pescoço
http://www.cirurgiadacolunavertebral.com.br/leg_pesquisa/Neck%20Disability%20Index%20(Indice%20de%20Incapacidade%20Cervical).pdf
Indice Oswestry de incapacidade
https://www.remobrasil.com/attachments/article/956/Indice-Oswestry-Fisioterapia.pdf


Essas ferramentas são úteis para identificar o status basal de um paciente em relação à dor, função e incapacidade e para monitorar uma mudança no status de um paciente durante o curso do tratamento.`;

public Titulo11 = ` QUESTIONÁRIOS AUTO-AVALIATIVOS VALIDADOS `;





  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private db: AngularFireDatabase,
    private alertCtrl: AlertController,
    private http: Http,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {
    let loader = this.loadingCtrl.create({ content: "Carregando jogos..." });
    loader.present();
    loader.dismiss();
  
  }
  

  
  OpenModal01() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video01,desc: this.Descricao01,tite: this.Titulo01
  });
    modal.present();
  }

  OpenModal02() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video02,desc: this.Descricao02,tite: this.Titulo02
  });
    modal.present();
  }

  OpenModal03() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video03,desc: this.Descricao03,tite: this.Titulo03
  });
    modal.present();
  }

  OpenModal04() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video04,desc: this.Descricao04,tite: this.Titulo04
  });
    modal.present();
  }


  OpenModal05() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video05,desc: this.Descricao05,tite: this.Titulo05
  });
    modal.present();
  }



  OpenModal06() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video06,desc: this.Descricao06,tite: this.Titulo06
  });
    modal.present();
  }




  OpenModal07() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video07,desc: this.Descricao07,tite: this.Titulo07
  });
    modal.present();
  }




  OpenModal08() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video08,desc: this.Descricao08,tite: this.Titulo08
  });
    modal.present();
  }






  OpenModal09() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video09,desc: this.Descricao09,tite: this.Titulo09
  });
    modal.present();
  }




  OpenModal10() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video10,desc: this.Descricao10,tite: this.Titulo10
  });
    modal.present();
  }

  OpenModal11() {
    const modal = this.modalCtrl.create(AdmativaPage,{
      vide: this.Video11,desc: this.Descricao11,tite: this.Titulo11
  });
    modal.present();
  }


  // OpenModal12() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video12,desc: this.Descricao12,tite: this.Titulo12
  // });
  //   modal.present();
  // }





  // OpenModal13() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video13,desc: this.Descricao13,tite: this.Titulo13
  // });
  //   modal.present();
  // }





  // OpenModal14() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video14,desc: this.Descricao14,tite: this.Titulo14
  // });
  //   modal.present();
  // }






  // OpenModal15() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video15,desc: this.Descricao15,tite: this.Titulo15
  // });
  //   modal.present();
  // }




  // OpenModal16() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video16,desc: this.Descricao16,tite: this.Titulo16
  // });
  //   modal.present();
  // }




  // OpenModal17() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video17,desc: this.Descricao17,tite: this.Titulo17
  // });
  //   modal.present();
  // }



  // OpenModal18() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video18,desc: this.Descricao18,tite: this.Titulo18
  // });
  //   modal.present();
  // }



  // OpenModal19() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video19,desc: this.Descricao19,tite: this.Titulo19
  // });
  //   modal.present();
  // }



  // OpenModal20() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video20,desc: this.Descricao20,tite: this.Titulo20
  // });
  //   modal.present();
  // }



  // OpenModal21() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video21,desc: this.Descricao21,tite: this.Titulo21
  // });
  //   modal.present();
  // }



  // OpenModal22() {
  //   const modal = this.modalCtrl.create(AdmativaPage,{
  //     vide: this.Video22,desc: this.Descricao22,tite: this.Titulo22
  // });
  //   modal.present();
  // }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}