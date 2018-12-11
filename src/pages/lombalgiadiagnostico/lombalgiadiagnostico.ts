import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController,ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { PopUp02Page } from '../lombalgiadiagnostico/popup/popup';
import { ModalController  } from 'ionic-angular';
@Component({
  selector: 'page-lombalgiadiagnostico',
  templateUrl: 'lombalgiadiagnostico.html'
})
export class LombalgiaDiagnosticoPage {


  public Video01 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;

  public Descricao01 = ` Solicitar ao paciente os movimentos ativos livres de tronco para flexão, extensão e inclinação de tronco. O paciente poderá aferir aumento da dor durante os movimentos. Pode ser mensurado utilizando um inclinômetro ou utilizando goniômetro.
  
  `;
  
  public Titulo01 = ` ADM ATIVA `;
  
  
  public Video02 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/v6ubalRxRGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao02 = ` Paciente posicionado em decúbito ventral. O terapeuta posicionado ao lado com os braços estendidos e os cotovelos travados, irá com os polegares ou a região tênar e hipotênar das mãos utilizando a oscilação do corpo para causar pressão ao palpar os processos espinhosos e transversos das vertebras torácicas e lombar afim de verificar a mobilidade. O terapeuta deve realizar movimentos alternados entre as vertebras, comparando um lado com o outro, para detectar presença de bloqueios ou hipomobilidade articular.
  `;
  
  public Titulo02 = ` AVALIAÇÃO DA MOBILIDADE SEGMENTAR `;
  
  
  
  public Video03 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/sWAs-aEZLjw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao03 = ` Paciente posicionado em decúbito ventral. O terapeuta posicionado ao lado com os braços estendidos e os cotovelos travados, irá com os polegares ou a região tênar e hipotênar das mãos utilizando a oscilação do corpo para causar pressão ao palpar os processos espinhosos das vertebras torácicas e lombar afim de descriminar os locais dolorosos para o paciente. O terapeuta deverá solicitar para o paciente aferir os pontos dolorosos e está atento aos sinais de fuga a dor ou sinais faciais.
  `;
  
  public Titulo03 = ` PROVOCAÇÃO DA DOR `;
  
  
  
  public Video04 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/J4tZGm7B25o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao04 = ` O fisioterapeuta deve solicitar ao paciente o movimento de flexão e extensão do tronco no plano sagital de forma ativa em bipedestação. Durante o movimente deve-se analisar se o paciente afere sintomas centrais ou periféricos. A centralização está relacionada a dor ou parestesias, percebida pelo paciente em uma localização mais proximal em resposta a movimentos únicos e repetidos ou posições sustentadas, a periferalização ocorre quando a localização dos sintomas do paciente é percebida em um local mais distal, como a panturrilha ou o pé, em resposta a movimentos únicos e repetitivos ou posições sustentadas.
  `;
  
  public Titulo04 = ` JULGAMENTO DE CENTRALIZAÇÃO DURANTE O MOVIMENTO `;
  
  
  
  public Video05 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/XuYRgYDUw9c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao05 = ` O paciente está deitado de bruços com o corpo na mesa de exame, as pernas sobre a borda e os pés apoiados no chão. Enquanto o paciente descansa nessa posição, o examinador aplica a pressão posterior-anterior aos processos espinhosos da porção inferior da coluna lombar. Qualquer provocação de dor é notada. Em seguida, o paciente levanta as pernas do chão e a pressão póstero-anterior é novamente aplicada à coluna lombar. Se a dor está presente na posição de repouso, mas diminui substancialmente (ou diminui em gravidade / intensidade ou resolve) na segunda posição, o teste é positivo. Melhora suave nos sintomas não constitui um teste positivo. Se a dor está presente na posição de repouso, mas não diminui substancialmente na segunda posição, o teste é negativo. Além disso, se o paciente não tiver qualquer provocação de dor com pressões postero-anterior aplicadas à coluna lombar, então o teste é considerado negativo.
  `;
  
  public Titulo05 = ` TESTE DE ESTABILIDADE EM PRONO `;
  
  
  public Video06 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/FmYNCovik6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao06 = ` O paciente está em decúbito dorsal e o terapeuta levanta passivamente um dos membros inferiores, flexionando o quadril com o joelho estendido, em seguida realiza passivamente o moviemnto de dorsiflexão do tornozelo. Um teste positivo é obtido com a reprodução de dor irradiada dos membros inferiores, indicando pinçamento nervoso.
  `;
  
  public Titulo06 = ` STRAIGHT LEG RAISE `;
  
  
  
  public Video07 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/J4tZGm7B25o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao07 = ` O examinador deve solicitar o movimento de flexão e retorno da flexão de tronco em bipedestação, e verificar se a presença do sinal de “Catch” ou sinal de “Gower” e presença da reversão do ritmo lombo pelvico. Sinal de “Catch”: quando o paciente desvia do plano sagital durante o retorno da flexão de tronco. Sinal de “Gower”: quando o paciente utiliza as mãos como acessório para realizar o retorno da flexão. A reversão do ritmo lombopélvico é positiva se o paciente, ao retornar de uma posição flexionada para frente, de repente inclina os joelhos para estender os quadris, deslocando a pelve anteriormente, à medida que retorna à posição de pé.
  `;
  
  public Titulo07 = ` JULGAMENTO DA PRESENÇA DE  MOVIMENTO ANORMAL `;
  
  
  public Video08 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/L01dQ6dtuqk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao08= ` O paciente é solicitado a sentar-se em posição curvada e o olhar fixo no horizonte, com um dos joelhos flexionados e outro estendido, já os membros superiores devem está com o dorso das mãos posicionado na região lombar ou estarem relaxadas sobre a mesa de exame. O teste divide-se em duas fases sendo a primeira apenas com o paciente realizando extensão do joelho, na segunda fase o examinador deverá estar posicionado ao lado do paciente, realiza o apoio de uma de suas mãos sob o occipto e a outra mão sob a planta do pé, em seguida, realiza a flexão total da cervical com a mão apoiada no occipital e a dorsiflexão com a mão que está sobre a planta do pé, o paciente deverá ficar na primeira posição sem interferência do examinado e na última com interferência do examinado por 30 segundos cada um, o processo deverá ser repedido no membro inferior oposto. O paciente poderá sugerir exacerbação da dor, ou dor irradiada para uma das pernas, o que pode indicar herniaçao discal ou aderências de raízes nervosas.
  `;
  
  public Titulo08 = ` SLUMP TEST `;
  
  
  public Video09 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/4GeqT36q-l0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao09 = `O paciente é posicionado em supino; o examinador eleva ambas as pernas totalmente estendidas do paciente até o ponto em que o sacro começa a se levantar da mesa. O paciente é instruído a manter o contato da região lombar com a mesa enquanto abaixa lentamente as pernas estendidas até a mesa, sem assistência. O examinador observa e mede quando a região lombar perde o contato com a mesa devido à inclinação pélvica anterior.
  `;
  
  public Titulo09 = ` FORÇA DE RESISTÊNCIA DOS MUSCULOS DO TRONCO: FLEXORES `;
  
  
  
  
  public Video10 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/gC2Ej9TfUtM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao10 = ` O paciente posicionado de bruços, com as mãos atrás das costas ou dos lados. O paciente é instruído a estender a coluna lombar e elevar o tórax da mesa a aproximadamente 30 ° e manter a posição. O teste é cronometrado até que o paciente não consiga mais manter a posição. Deve ficar na posição por pelo menos 30 segundos para grau de força normal.
  `;
  
  public Titulo10 = ` FORÇA DE RESISTÊNCIA DOS MUSCULOS DO TRONCO: EXTENSORES `;
  
  
  
  
  public Video11 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/4GeqT36q-l0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao11 = `O paciente é posicionado em decúbito lateral, com os quadris em neutro, joelhos flexionados em 90 ° e apoiando a parte superior do corpo no cotovelo. O paciente é solicitado a levantar a pélvis da mesa e a endireitar a curva da coluna sem rolar para frente ou para trás. A posição é mantida e cronometrada até que o paciente não consiga mais manter a posição.
  `;
  
  public Titulo11 = ` FORÇA DE RESISTÊNCIA DOS MUSCULOS DO TRONCO: INCLINADORES `;
  
  
  
  public Video12 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/LlqgVWnS4Wc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao12 = ` O paciente é posicionado em decúbito lateral com ambas as pernas totalmente estendidas, em rotação neutra e posição relaxada do braço, com as extremidades superioras apoiadas na caixa torácica e as mãos sob abdômen. O paciente é instruído a manter a perna estendida e levantar a parte superior da coxa em direção ao teto, mantendo o membro alinhado com o corpo. Os pacientes são classificados em qualidade de movimento.
  `;
  
  public Titulo12 = ` FORÇA DE RESISTÊNCIA DOS MUSCULOS DO QUADRIL: ABDUTORES `;
  
  
  
  
  public Video13 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/NtKXazpG1UI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao13 = ` O paciente é posicionado em decúbito dorsal com os joelhos flexionados a 90 ° e as solas dos pés na mesa. O paciente é instruído a levantar a pélvis da mesa até um ponto onde os ombros, quadris e joelhos estejam em linha reta. A posição é mantida e cronometrada até que a posição não possa mais ser mantida.
  `;
  
  public Titulo13 = ` FORÇA DE RESISTÊNCIA DOS MUSCULOS DO QUADRIL: EXTENSORES `;
  
  
  
  
  
  public Video14 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/nH6BOmgcn8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao14 = `O paciente é posicionado de bruços com os pés sobre a borda da mesa de tratamento. O quadril medido é colocado em 0 ° de abdução e o quadril contralateral é colocado em cerca de 30 ° de abdução. O joelho de referência é flexionado a 90 ° e a perna é movida passivamente para produzir rotação do quadril. A estabilização manual é aplicada na pelve para prevenir o movimento pélvico e também na articulação tibiofemoral para impedir o movimento (rotação ou abdução / adução), o que poderia ser interpretado como rotação do quadril. O movimento é interrompido quando a extremidade alcança o seu limite de amplitude de movimento articular passivo ou quando o movimento pélvico é necessário para um movimento adicional da perna. Pode-se utilziar o inclinometro ou goniometro para mensurar o movimento.
  `;
  
  public Titulo14 = ` ADM PASSIVA DE QUADRIL: ROTAÇÃO INTERNA E EXTERNA`
  
  
  
  public Video15 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/LqxgEgSVNho" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao15 = `Com o paciente em decúbito dorsal, o examinador flexiona passivamente um dos quadris a 90 °. O quadril é então flexionado até que a coxa oposta comece a se levantar da mesa. Pode-se mensurar o movimento posicionando o inclinometro no topo do joelho, ou com a tecnica de goniometria.
  `;
  
  public Titulo15 = ` ADM PASSIVA DE QUADRIL: FLEXÃO `;
  
  
  
  public Video16 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/gJYsqV_Gemk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao16 = `Com o paciente em decúbito dorsal, com a parte inferior das pernas pendendo para fora do final da maca, o examinador flexiona os quadris e os joelhos de modo que a região lombar do paciente fique plana contra o tampo da mca. Um membro é mantido nessa posição, mantendo o joelho e o quadril em flexão, a região lombar nivelada com a mesa, enquanto a coxa e a perna ipsilaterais são rebaixadas em direção à mesa. Mantenha o quadril em 0 ° de abdução e adução do quadril. O paciente é instruído a relaxar e permitir que a gravidade abaixe a perna e a coxa em direção ao chão. O ângulo do fêmur desta perna abaixada até a linha do tronco (e mesa) é medido. A quantidade de flexão do joelho também é monitorada para avaliar a flexibilidade relativa do músculo reto femoral.
  `;
  
  public Titulo16 = ` ADM PASSIVA DE QUADRIL: EXTENSÃO `;
  
  
  
  public Video17 = `<iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
  
  public Descricao17 = `Indice Oswestry de incapacidade
  https://www.remobrasil.com/attachments/article/956/Indice-Oswestry-Fisioterapia.pdf
  Questionario Rolan-Morris de incapacidade
  http://cirurgiadacolunavertebral.com.br/portal/templates/siteground-j15-80/arquivos/biblioteca/escala_questionario/Questionario_Roland-Morris.pdf
  
  Essas ferramentas são úteis para identificar o status basal de um paciente em relação à dor, função e incapacidade e para monitorar uma mudança no status de um paciente durante o curso do tratamento.
  `;
  
  public Titulo17 = ` QUESTIONÁRIOS AUTO-AVALIATIVOS VALIDADOS `;


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
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video01,desc: this.Descricao01,tite: this.Titulo01
  });
    modal.present();
  }

  OpenModal02() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video02,desc: this.Descricao02,tite: this.Titulo02
  });
    modal.present();
  }

  OpenModal03() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video03,desc: this.Descricao03,tite: this.Titulo03
  });
    modal.present();
  }

  OpenModal04() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video04,desc: this.Descricao04,tite: this.Titulo04
  });
    modal.present();
  }


  OpenModal05() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video05,desc: this.Descricao05,tite: this.Titulo05
  });
    modal.present();
  }



  OpenModal06() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video06,desc: this.Descricao06,tite: this.Titulo06
  });
    modal.present();
  }




  OpenModal07() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video07,desc: this.Descricao07,tite: this.Titulo07
  });
    modal.present();
  }




  OpenModal08() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video08,desc: this.Descricao08,tite: this.Titulo08
  });
    modal.present();
  }






  OpenModal09() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video09,desc: this.Descricao09,tite: this.Titulo09
  });
    modal.present();
  }




  OpenModal10() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video10,desc: this.Descricao10,tite: this.Titulo10
  });
    modal.present();
  }





  OpenModal11() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video11,desc: this.Descricao11,tite: this.Titulo11
  });
    modal.present();
  }





  OpenModal12() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video12,desc: this.Descricao12,tite: this.Titulo12
  });
    modal.present();
  }





  OpenModal13() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video13,desc: this.Descricao13,tite: this.Titulo13
  });
    modal.present();
  }





  OpenModal14() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video14,desc: this.Descricao14,tite: this.Titulo14
  });
    modal.present();
  }






  OpenModal15() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video15,desc: this.Descricao15,tite: this.Titulo15
  });
    modal.present();
  }




  OpenModal16() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video16,desc: this.Descricao16,tite: this.Titulo16
  });
    modal.present();
  }




  OpenModal17() {
    const modal = this.modalCtrl.create(PopUp02Page,{
      vide: this.Video17,desc: this.Descricao17,tite: this.Titulo17
  });
    modal.present();
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}