import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController,ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { PopUp01Page } from '../lombalgiaintervencao/popup/popup';
import { ModalController  } from 'ionic-angular';
@Component({
  selector: 'page-lombalgiaintervencao',
  templateUrl: 'lombalgiaintervencao.html'
})
export class LombalgiaIntervencaoPage {

  //CIF: LOMBALGIA COM DÉFICT DE MOBILIDADE - QUADRO AGUDO:

  public Video01 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ABPhrijZjI4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao01 = `Manipulações com “thrust” devem ser feitas por profissionais capacitados.
     `;
  public Titulo01 = `   MANIPULAÇÃO LOMBAR   `;
  
  
  
  public Video02 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/LqxgEgSVNho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao02 = `Mobilizações que favoreçam a mobilidade de quadril e lombo-pélvica. \n 
  Descrição da técnica: Paciente deitado em decúbito dorsal, o terapeuta põe uma mão na sola do pé e a outra mão acima da patela para favorecer a mobilização com arco completo e bem estabilizado.  `;
  public Titulo02 = `   MOBILIZAÇÕES   `;
  
  
  
  public Video03 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/tvxsAUDWWzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao03 = `Mobilizações que favoreçam os movimentos das articulações intervertebrais. \n 
  Descrição da técnica: Paciente deitado em decúbito ventral, o terapeuta pressiona o processo espinhoso bilateralmente, pressionando uma mão de cada vez.   `;
  public Titulo03 = `   MOBILIZAÇÕES   `;
  
  
  public Video04 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/YnP6CZJkTuY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao04 = `Exercícios leves que favoreçam a mobilidade articular do quadril e lombar. \n
  Descrição do exercício: Paciente flexiona os joelhos, agarra os membros inferiores na região abaixo da patela e realiza uma leve flexão de quadril.   `;
  public Titulo04 = `   EXERCÍCIOS DE MOBILIDADE   `;
  
  
  public Video05 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/gJYsqV_Gemk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao05 = `Exercícios leves que favoreçam a mobilidade articular do quadril e lombar. \n
  Descrição do exercício: Paciente deitado em decúbito dorsal, o terapeuta posiciona os membros inferiores na posição de flexão e deixa que o paciente desça a perna controlando o movimento.   `;
  public Titulo05 = `   EXERCÍCIOS DE MOBILIDADE   `;
  
  
  public Video06 = ` `;
  public Descricao06 = `Encorajar o paciente a ter um estilo de vida ativo e se possível, com atividades físicas.  `;
  public Titulo06 = `   ACONSELHAMENTO   `;
  
  
  
  
  
  //CIF: LOMBALGIA COM DÉFICT DE MOBILIDADE - QUADRO SUBAGUDO
  
  
  
  public Video07 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/tvxsAUDWWzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao07 = `Descrição da técnica: a mobilização segmentar é feita com leves pressões manuais na região do processo espinhoso, de forma bilateral, favorecendo a mobilização isolada de cada vértebra ou área.	 `;
  public Titulo07 = `  MOBILIZAÇÃO SEGMENTAR    `;
  
  
  public Video08 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/OoDKN2w82Kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao08 = `Exercícios que favoreçam a contração dos músculos estabilizadores da coluna. \n 
  Descrição do exercício: Paciente deitado de costas na bola suíça, realizando movimento de flexão de tronco.  `;
  public Titulo08 = `   MOBILIZAÇÃO ATIVA DE TRONCO    `;
  
  
  public Video09 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Ca9Fqkfrzf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao09 = `Exercícios que favoreçam a contração dos músculos estabilizadores da coluna. \n
  Descrição do exercício: Paciente deitado de barriga pra baixo na bola suíça, realizando movimento de extensão de tronco  `;
  public Titulo09 = `   MOBILIZAÇÃO ATIVA DE TRONCO       `;
  
  
  public Video10 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/Tk7fIBafJIE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao10 = `Exercícios que exijam força, resistência e coordenação. \n
  Descrição do exercício: Paciente na posição em quatro apoios, e realiza movimento de extensão do quadril e flexão de ombro.    `;
  public Titulo10 = `   EXERCÍCIOS DE COORDENAÇÃO, FORÇA E RESISTÊNCIA `;
  
  public Video11 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/WwmfgoRMg1g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao11 = `Exercícios que exijam força, resistência e coordenação. \n
  Descrição do exercício: Paciente deitado com as pernas flexionadas, eleva a pelve até o alinhamento do tronco com os membros inferiores  `;
  public Titulo11 = `   EXERCÍCIOS DE COORDENAÇÃO, FORÇA E RESISTÊNCIA  `;
  
  public Video12 = `  `;
  public Descricao12 = `Encorajar o paciente a ter um estilo de vida ativo e evitar esforços ou posições que desencadeiam a lombalgia.   `;
  public Titulo12 = `   ORIENTAÇÕES  `;
  
  
  
  
  //CIF: LOMBALGIA COM DÉFICT DE COORDENAÇÃO - QUADRO AGUDO:
  
  
  
  public Video13 = ` `;
  public Descricao13 = `Exercícios que favoreçam a mobilidade ativa, proporcionando sinergia e controle entre os grupos musculares. Os exercícios funcionais devem ser explorados e podem ser feitos de forma progressiva de acordo com capacidade do paciente. `;
  public Titulo13 = `  REEDUCAÇÃO NEUROMUSCULAR  `;
  
  
  
  public Video14 = `  `;
  public Descricao14 = ` Utilização de dispositivos temporários para estabilização da região lombossacra, afim de evitar quadros álgicos. Órteses e cintas podem ser prescritas para pacientes com quadro agudos com déficit de coordenação.  `;
  public Titulo14 = `   DISPOSITIVOS EXTERNOS TEMPORÁRIO   `;
  
  
  public Video15 = `  `;
  public Descricao15 = `Autocuidado em manter a posição da coluna sempre em posição neutra em sua postura, afim de evitar quadros álgicos. 
  Encorajar o paciente a ter um estilo de vida ativo. `;
  public Titulo15 = `    ORIENTAÇÕES    `;
  
  
  
  
  //CIF: LOMBALGIA COM DÉFICT DE COORDENAÇÃO - QUADRO SUBAGUDO:
  
  
  
  
  
  
  public Video16 = `  `;
  public Descricao16 = `Exercícios que favoreçam a mobilidade ativa, proporcionando sinergia e controle entre os grupos musculares. Os exercícios funcionais devem ser explorados e podem ser feitos de forma progressiva de acordo com capacidade do paciente.  `;
  public Titulo16 = `   REEDUCAÇÃO NEUROMUSCULAR  `;
  
  
  public Video17 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/tvxsAUDWWzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  public Descricao17 = `Terapias manuais que melhorem a mobilidade segmentar das vértebras. \n
  Descrição do recurso: Descrição da técnica: ppA mobilização segmentar é feita com leves pressões manuais na região do processo espinhoso, de forma bilateral, favorecendo a mobilização isolada de cada vértebra ou área.  `;
  public Titulo17 = `   TERAPIAS MANUAIS   `;
  
  
  public Video18 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/LqxgEgSVNho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao18 = `Terapias manuais que melhorem a mobilidade nas articulações lombopélvica e quadril. \n
   Descrição do recurso: Paciente deitado em decúbito dorsal, o terapeuta põe uma mão na sola do pé e a outra mão acima da patela para favorecer a mobilização com arco completo e bem estabilizado. `;
  public Titulo18 = `   TERAPIAS MANUAIS   `;
  
  
  public Video19 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/Xf_bunAT7F0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  public Descricao19 = `Exercícios que exijam força dos músculos envolvidos nas articulações de quadril e lombopélvica. \n
   Descrição do exercício: Paciente deitado em decúbito dorsal, realiza flexão de quadril com angulação de acordo com sua capacidade.  `;
  public Titulo19 = `   EXERCÍCIOS DE FORÇA  `;
  
  
  public Video20 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/NtKXazpG1UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao20 = `Exercícios que envolvam força e resistência de músculos do tronco e quadril. \n
  Descrição do exercício: Paciente deitado com as pernas flexionadas, eleva a pelve até o alinhamento do tronco com os membros inferiores.  `;
  public Titulo20 = `   EXERCÍCIO FORÇA E RESISTÊNCIA  `;
  
  
  public Video21 = ` `;
  public Descricao21 = `Autocuidado em manter a posição da coluna sempre em posição neutra, durante os movimentos e em sua postura. \n
  Encorajar o paciente a ter um estilo de vida ativo. \n
  Criar estratégias para o gerenciamento das dores, afim de retornar as atividades de vida diárias.`
  public Titulo21 = `   ORIENTAÇÕES  `;
  
  
  //CIF: LOMBALGIA COM DÉFICT DE COORDENAÇÃO - QUADRO CRÔNICO:
  
  
  public Video22 = `  `;
  public Descricao22 = `Descrição: Exercícios que favoreçam a mobilidade ativa, proporcionando sinergia e controle entre os grupos musculares. Os exercícios funcionais devem ser explorados e podem ser feitos de forma progressiva de acordo com capacidade do paciente. `;
  public Titulo22 = `   REEDUCAÇÃO NEUROMUSCULAR  `;
  
  
  public Video23 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/tvxsAUDWWzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao23 = `Terapias manuais que melhorem a mobilidade segmentar das vértebras, região lombopélvica e quadril. \n
   Descrição da técnica: A mobilização segmentar é feita com leves pressões manuais na região do processo espinhoso, de forma bilateral, favorecendo a mobilização isolada de cada vértebra ou área.   `;
  public Titulo23 = `   TERAPIAS MANUAIS  `;
  
  
  
  public Video24 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/NtKXazpG1UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao24 = `Exercícios que exijam força e resistência dos músculos envolvidos nas articulações de tronco e quadril. \n Descrição do exercício: Paciente deitado com as pernas flexionadas, eleva a pelve até o alinhamento do tronco com os membros inferiores.  `;
  public Titulo24 = `   EXERCÍCIO FORÇA E RESISTÊNCIA  `;
  
  
  
  
  public Video25= `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ef7Lr6DzIdg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao25 = `Exercícios que exijam força e resistência dos músculos envolvidos nas articulações de tronco e quadril. \n Descrição do exercício: Paciente apoiado em decúbito lateral, com o braço agarrado na bola e as pernas estabilizadas. Realiza movimento de inclinação lateral.  `;
  public Titulo25 = `   EXERCÍCIOS DE FORÇA E RESISTENCIA   `;
  
  
  
  public Video26 = `  `;
  public Descricao26 = `Criar estratégias de gerenciamento de quadros álgicos e promover a reintegração social.  `;
  public Titulo26 = `   ORIENTAÇÕES  `;
  
  
  //CIF: LOMBALGIA COM DOR REFERIDA EM MMII - QUADRO AGUDO:
  
  
  
  public Video27 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/tvxsAUDWWzs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao27 = `Terapias manuais que promovam a centralização e mobilidade extensora da região lombar. \n
  Descrição do recurso: A mobilização segmentar é feita com leves pressões manuais na região do processo espinhoso, de forma bilateral, favorecendo a mobilização isolada de cada vértebra ou área.  `;
  public Titulo27 = `   TERAPIAS MANUAIS: `;
  
  public Video28 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Y1qEEczstwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao28 = `DESCRIÇÃO: Paciente deitado em decúbito dorsal, o terapeuta agarra as pernas do paciente e realiza uma força de tração com auxílio do seu peso corporal.  `;
  public Titulo28 = `  TRAÇÃO  `;
  
  public Video29= `  <iframe width="340" height="315" src="https://www.youtube.com/embed/AOXP4b5PCaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao29 = `Exercícios que favoreçam a mobilidade extensora de quadril e tronco. \n
  Descrição do exercício: Paciente deitado em decúbito dorsal, em uma superfície lisa e estável, realiza hiperextensão de toda cadeia posterior.  `;
  public Titulo29 = `   EXERCÍCIOS PARA MOBILIDADE EXTENSORA  `;
  
  
  public Video30 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Ca9Fqkfrzf0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao30 = `Exercícios que favoreçam a mobilidade extensora de quadril e tronco. \n
  Descrição do exercício: Paciente deitado de barriga pra baixo na bola suíça, realizando movimento de extensão de tronco  `;
  public Titulo30 = ` EXERCÍCIOS PARA MOBILIDADE EXTENSORA:   `;
  
  
  public Video31 = `  `;
  public Descricao31 = `Autocuidado em manter o posicionamento da coluna sempre centralizada.  `;
  public Titulo31 = `  ORIENTAÇÕES  `;
  
  
  
  
 // CIF: LOMBALGIA COM DOR IRRADIADA - QUADRO AGUDO:
  
  
  public Video32 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/4Kmb0fXtcfE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao32 = ` Descrição do recurso: Paciente deitado em posição relaxada, o terapeuta realiza uma força de afastamento na região a ser mobilizada, favorecendo o “estiramento” dos nervos e a abertura do forame intervertebral. `;
  public Titulo32 = ` MOBILIZAÇÃO NEURAL    `;
    
  
  
  public Video33 = `  `;
  public Descricao33 = `Terapias manuais para mobilizar as articulações e tecidos moles adjacentes de nervos e raízes nervosas. Exemplos: Massagem de liberação miofascial e mobilizações passivas.  `;
  public Titulo33 = ` TERAPIAS MANUAIS    `;
  
  
  
  public Video34 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Y1qEEczstwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao34 = `Descrição da técnica: Paciente deitado em decúbito dorsal, o terapeuta agarra as pernas do paciente e realiza uma força de tração com auxílio do seu peso corporal.   `;
  public Titulo34 = ` TRAÇÃO   `;
  
  
  
  public Video35 = `  `;
  public Descricao35 = `Reeducar o paciente com relação a sua postura e posicionamento sentado/dormindo, para evitar posições que causem compressão nervosa. `;
  public Titulo35 = ` ORIENTAÇÕES  `;
  
  
  //CIF: LOMBALGIA COM DOR IRRADIADA - QUADRO SUBAGUDO:
  
  
  public Video36 = `  `;
  public Descricao36 = `Terapias manuais para mobilizar as articulações e tecidos moles adjacentes de nervos e raízes nervosas. Exemplos: Massagem de liberação miofascial e mobilizações passivas.   `;
  public Titulo36 = ` TERAPIAS MANUAIS   `;
  
  
  
  public Video37 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Y1qEEczstwY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao37 = `Descrição da técnica: Paciente deitado em decúbito dorsal, o terapeuta agarra as pernas do paciente e realiza uma força de tração com auxílio do seu peso corporal.   `;
  public Titulo37 = ` TRAÇÃO   `;
  
  
  
  public Video38 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7Fz8VUGw7k8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao38 = `Descrição do exercício: Paciente na posição sentada, realiza uma flexão de cervical e tronco, em seguida faz extensão de joelho, alongando toda a cadeia posterior.    `;
  public Titulo38 = ` SLUMP EXERCISES  `;
  
  
  
  
  //CIF: LOMBALGIA COM DOR IRRADIADA - QUADRO CRÔNICO:
  
  
  public Video39 = `  `;
  public Descricao39 = `Terapias manuais para mobilizar as articulações e tecidos moles adjacentes de nervos e raízes nervosas. Exemplos: Massagem de liberação miofascial e mobilizações passivas.   `;
  public Titulo39 = ` TERAPIAS MANUAIS   `;
  
  
  public Video40 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/Gdsubq4DmY8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao40 = `Descrição do exercíco: Paciente deitado com as pernas flexionadas, eleva a pelve até o alinhamento do tronco com os membros inferiores. Podendo tornar o exercício mais intenso, estendendo o joelho no final do movimento.   `;
  public Titulo40 = ` EXERCÍCIOS DE MOBILIDADE TORACOLOMBAR  `;
  
  
  public Video41 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/AOXP4b5PCaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao41 = `Descrição do exercício: Paciente deitado em decúbito dorsal, em uma superfície lisa e estável, realiza hiperextensão de toda cadeia posterior.  `;
  public Titulo41 = ` EXERCÍCIOS DE MOBILIDADE TORACOLOMBAR  `;
  
  
  public Video42 = ` `;
  public Descricao42 = ` Criar estratégias para o gerenciamento das dores. Reeducar o paciente para evitar posições que evitem compressões nervosa `;
  public Titulo42 = ` ORIENTAÇÕES `;
  
  
  
  
 // CIF: LOMBALGIA COM QUADROS COGNITIVO OU AFETIVOS.
  
  
  
  public Video43 = ` `;
  public Descricao43 = ` Educação e aconselhamento ao paciente, de acordo com o tipo de distúrbio. Assim como, encaminhar o paciente para outros profissionais que ajudem no tratamento de distúrbios psicológicos, sociais... entre outros.  `;
  public Titulo43 = ` ORIENTAÇÕES `;
  
  
  //CIF: LOMBALGIA COM DOR GENERALIZADA 
  
  
  public Video44 = ` `;
  public Descricao44 = ` Exercícios aeróbicos de baixa intensidade e de longa duração.  `;
  public Titulo44 = ` EXERCÍCIOS AERÓBICOS  `;
  
  
  public Video45 = ` `;
  public Descricao45 = ` Exercícios ativos e resistidos com baixa resistência.  `;
  public Titulo45 = ` EXERCÍCIOS ATIVOS     `;
  
  
  public Video46 = ` `;
  public Descricao46 = ` Educação e aconselhamento ao paciente. De acordo com o tipo de distúrbio ou quadro clínico do paciente   `;
  public Titulo46 = ` ORIENTAÇÕES `;

  



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
  


  openModal01() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video01,desc: this.Descricao01,tite: this.Titulo01
  });
    modal.present();
  }
 
 
 openModal02() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video02,desc: this.Descricao02,tite: this.Titulo02
  });
    modal.present();
  }
 
 
 openModal03() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video03,desc: this.Descricao03,tite: this.Titulo03
  });
    modal.present();
  }
 
 
 openModal04() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video04,desc: this.Descricao04,tite: this.Titulo04
  });
    modal.present();
  }
 
 
 openModal05() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video05,desc: this.Descricao05,tite: this.Titulo05
  });
    modal.present();
  }
 
 
 openModal06() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video06,desc: this.Descricao06,tite: this.Titulo06
  });
    modal.present();
  }
 
 
 openModal07() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video07,desc: this.Descricao07,tite: this.Titulo07
  });
    modal.present();
  }
 
 
 openModal08() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video08,desc: this.Descricao08,tite: this.Titulo08
  });
    modal.present();
  }
 
 
 openModal09() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video09,desc: this.Descricao09,tite: this.Titulo09
  });
    modal.present();
  }
 
 
 openModal10() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video10,desc: this.Descricao10,tite: this.Titulo10
  });
    modal.present();
  }
 
 
 openModal11() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video11,desc: this.Descricao11,tite: this.Titulo11
  });
    modal.present();
  }
 
 
 openModal12() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video12,desc: this.Descricao12,tite: this.Titulo12
  });
    modal.present();
  }
 
 
 openModal13() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video13,desc: this.Descricao13,tite: this.Titulo13
  });
    modal.present();
  }
 
 
 openModal14() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video14,desc: this.Descricao14,tite: this.Titulo14
  });
    modal.present();
  }
 
 
 openModal15() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video15,desc: this.Descricao15,tite: this.Titulo15
  });
    modal.present();
  }
 
 
 openModal16() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video16,desc: this.Descricao16,tite: this.Titulo16
  });
    modal.present();
  }
 
 
 openModal17() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video17,desc: this.Descricao17,tite: this.Titulo17
  });
    modal.present();
  }
 
 
 openModal18() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video18,desc: this.Descricao18,tite: this.Titulo18
  });
    modal.present();
  }
 
 
 openModal19() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video19,desc: this.Descricao19,tite: this.Titulo19
  });
    modal.present();
  }
 
 
 openModal20() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video20,desc: this.Descricao20,tite: this.Titulo20
  });
    modal.present();
  }
 
 
 openModal21() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video21,desc: this.Descricao21,tite: this.Titulo21
  });
    modal.present();
  }
 
 
 openModal22() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video22,desc: this.Descricao22,tite: this.Titulo22
  });
    modal.present();
  }
 
 
 openModal23() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video23,desc: this.Descricao23,tite: this.Titulo23
  });
    modal.present();
  }
 
 
 openModal24() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video24,desc: this.Descricao24,tite: this.Titulo24
  });
    modal.present();
  }
 
 
 openModal25() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video25,desc: this.Descricao25,tite: this.Titulo25
  });
    modal.present();
  }
 
 
 openModal26() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video26,desc: this.Descricao26,tite: this.Titulo26
  });
    modal.present();
  }
 
 
 openModal27() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video27,desc: this.Descricao27,tite: this.Titulo27
  });
    modal.present();
  }
 
 
 openModal28() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video28,desc: this.Descricao28,tite: this.Titulo28
  });
    modal.present();
  }
 
 
 openModal29() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video29,desc: this.Descricao29,tite: this.Titulo29
  });
    modal.present();
  }
 
 
 openModal30() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video30,desc: this.Descricao30,tite: this.Titulo30
  });
    modal.present();
  }
 
 
 openModal31() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video31,desc: this.Descricao31,tite: this.Titulo31
  });
    modal.present();
  }
 
 
 openModal32() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video32,desc: this.Descricao32,tite: this.Titulo32
  });
    modal.present();
  }
 
 
 openModal33() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video33,desc: this.Descricao33,tite: this.Titulo33
  });
    modal.present();
  }
 
 
 openModal34() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video34,desc: this.Descricao34,tite: this.Titulo34
  });
    modal.present();
  }
 
 
 openModal35() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video35,desc: this.Descricao35,tite: this.Titulo35
  });
    modal.present();
  }
 
 
 openModal36() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video36,desc: this.Descricao36,tite: this.Titulo36
  });
    modal.present();
  }
 
 
 openModal37() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video37,desc: this.Descricao37,tite: this.Titulo37
  });
    modal.present();
  }
 
 
 openModal38() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video38,desc: this.Descricao38,tite: this.Titulo38
  });
    modal.present();
  }
 
 
 openModal39() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video39,desc: this.Descricao39,tite: this.Titulo39
  });
    modal.present();
  }
 
 
 openModal40() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video40,desc: this.Descricao40,tite: this.Titulo40
  });
    modal.present();
  }
 
 
 openModal41() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video41,desc: this.Descricao41,tite: this.Titulo41
  });
    modal.present();
  }
 
 
 openModal42() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video42,desc: this.Descricao42,tite: this.Titulo42
  });
    modal.present();
  }
 
 
 openModal43() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video43,desc: this.Descricao43,tite: this.Titulo43
  });
    modal.present();
  }
 
 
 openModal44() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video44,desc: this.Descricao44,tite: this.Titulo44
  });
    modal.present();
  }
 
 
 openModal45() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video45,desc: this.Descricao45,tite: this.Titulo45
  });
    modal.present();
  }
 
 
 openModal46() {
    const modal = this.modalCtrl.create(PopUp01Page,{
      vide: this.Video46,desc: this.Descricao46,tite: this.Titulo46
  });
    modal.present();
  }
 
 
 

  dismiss() {
    this.viewCtrl.dismiss();
  }

}