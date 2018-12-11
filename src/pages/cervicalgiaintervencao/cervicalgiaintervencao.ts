import { Component } from '@angular/core';
import { LoadingController, NavController, AlertController,ViewController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, RequestOptions, Headers } from '@angular/http';
import { environment } from '../../environments/environment';
import { AdmativaPage2 } from '../cervicalgiaintervencao/admativa/admativa';
import { ModalController  } from 'ionic-angular';

@Component({
  selector: 'page-cervicalgiaintervencao',
  templateUrl: 'cervicalgiaintervencao.html'
})
export class CervicalgiaIntervencaoPage {


  public Video01 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/0sWDla1-z3Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao01 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo01 = `   MANIPULAÇÃO TORÁCICA  `;
  
  
  public Video02 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/5cbnTZ8yDFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao02 = `Paciente sentado, irá realizar protração da mandíbula e realizar uma leve pressão com as mãos embaixo no do queixo no sentido de baixo para cima e irá estender o pescoço, pode ser realizado 1 série de 1minuto de sustentação ou 2 séries de 30segundos.
   `;
  public Titulo02 = `   ALONGAMENTO ATIVO: FLEXORES  `;
  
  public Video03 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/qwbOMvb2QiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao03 = `Paciente sentado, mãos apoiadas na parte occipital de crânio, deixar que o peso das mãos realize o movimento de flexão do pescoço, alongado assim a porção posterior da cervical, pode ser realizado uma série de 1minuto de sustentação ou duas séries de 30segundos.`;
  public Titulo03 = `   ALONGAMENTO ATIVO: EXTENSORES  `;
  
  
  public Video04 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/1F3_QrKz1ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao04 = `Paciente sentado, posiciona uma das mãos no lado contralateral da região parietal da cabeça, deixando que o peso da mão realize assim o movimento de inclinação cervical para um dos lados. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo04 = `   ALONGAMENTO ATIVO: INCLINADORES  `;
  
  public Video05 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/lWTOzzd6uZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao05 = `Com uma das mãos apoiadas na região mentoniana de um lado do rosto, o paciente deverá empurrar gradativamente realizando a rotação do pescoço. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo05 = `   ALONGAMENTO ATIVO: ROTADORES  `;
  
  
  public Video06 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/xWZlWpqidvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao06 = `Exercícios de fortalecimento que preconizem não só as articulações do cotovelo e da glenoumeral, mas também a movimentação escapulo torácica. Ex.: exercícios de remada.
  
   `;
  public Titulo06 = `   EXERCÍCIOS DE FORÇA DE MMSS E ARTICULÇAO ESCAPULO-TORÁCICA  `;
  
  
  public Video07 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ZMnRerF6Qi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao07 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo07 = `   MANIPULAÇÃO CERVICAL  `;
  
  
  public Video08 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7OLDFfC4nto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao08 = `Paciente deitado em prono, o terapeuta ira posicionar as mãos na região parietal do paciente e realizar passivamente a flexão total do pescoço ou até o limiar de dor. `;
  public Titulo08 = `   MOBILIZAÇÃO PASSIVA: FLEXÃO  `;
  
  public Video09 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/stRwD1p--gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao09 = `Paciente deitado em decúbito dorsal, o terapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente de a superfície da maca, em seguida, realizar passivamente a inclinação do pescoço para ambos os lados até o limiar do movimento. `;
  public Titulo09 = `   MOBILIZAÇÃO PASSIVA: INCLINAÇÃO LATERAL  `;
  
  
  public Video10 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/vr3ObRgPLn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao10 = `Paciente deitado em decúbito dorsal, o fisioterapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente e da superfície da maca, em seguida, realizar passivamente a rotação do pescoço para ambos os lados alternadamente, até o limiar do movimento.`;
  public Titulo10 = `   MOBILIZAÇÃO PASSIVA: ROTAÇÃO  `;
  
  
  
  public Video11 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao11 = `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo11 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: FLEXORES`
  
  
  
  public Video12 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao12 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo12 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: EXTENSORES`
  
  
  
  public Video13 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe> `;
  public Descricao13 =` Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo13 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: INCLINADORES`
  
  
  
  public Video14 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/syKI3v7KecI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao14 = `Realizar exercícios que favoreçam a movimentação da articulação escapular, ex.: remadas, elevação escapular, exercícios de ombro.
  `;
  public Titulo14 = `   EXERCÍCIO PARA RESISTÊNCIA DE CINTURA ESCAPULAR `;
  
  
  
  
  public Video15 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ZMnRerF6Qi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao15 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo15 = `  MANIPULAÇÃO TORÁCICA E CERVICAL `;
  
  
  
  
  public Video17 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/syKI3v7KecI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao17 = `Exercícios de fortalecimento que preconizem não só as articulações do cotovelo e da glenoumeral, mas também a movimentação escapulo torácica. Ex.: exercícios de remada, ABD da glenoumeral `;
  public Titulo17 = `   EXERCÍCIOS DE FORÇA DE MMSS E ARTICULÇAO ESCAPULO-TORÁCICA  `;
  
  
  public Video18 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao18 = `Exercícios que aprimorem a capacidade cardiovascular, tais como caminhadas, corrida, ciclismo e natação. `;
  public Titulo18 = `   CONDICIONAMENTO AERÓBICO  `;
  
  
  public Video19 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/5cbnTZ8yDFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao19 = `Paciente sentado, irá realizar protração da mandíbula e realizar uma leve pressão com as mãos embaixo no do queixo no sentido de baixo para cima e irá estender o pescoço, pode ser realizado 1 série de 1minuto de sustentação ou 2 séries de 30segundos.
   `;
  public Titulo19 = `   ALONGAMENTO ATIVO: FLEXORES  `;
  
  public Video20 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/qwbOMvb2QiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao20 = `Paciente sentado, mãos apoiadas na parte occipital de crânio, deixar que o peso das mãos realize o movimento de flexão do pescoço, alongado assim a porção posterior da cervical, pode ser realizado uma série de 1minuto de sustentação ou duas séries de 30segundos.`;
  public Titulo20 = `   ALONGAMENTO ATIVO: EXTENSORES  `;
  
  
  public Video21 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/1F3_QrKz1ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao21 = `Paciente sentado, posiciona uma das mãos no lado contralateral da região parietal da cabeça, deixando que o peso da mão realize assim o movimento de inclinação cervical para um dos lados. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo21 = `   ALONGAMENTO ATIVO: INCLINADORES  `;
  
  public Video22= ` <iframe width="340" height="315" src="https://www.youtube.com/embed/lWTOzzd6uZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao22 = `Com uma das mãos apoiadas na região mentoniana de um lado do rosto, o paciente deverá empurrar gradativamente realizando a rotação do pescoço. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo22 = `   ALONGAMENTO ATIVO: ROTADORES  `;
  
  
  
  public Video23 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/7N5AXuK4lB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao23 = `Com o paciente posicionado em decúbito dorsal, o terapeuta deverá apoiar as mãos sobre o parietal do paciente e realizar o mecanismo de tração trazendo o crânio do paciente em sua direção. Para melhor resultado da técnica o fisioterapeuta deverá manter essa posição por alguns minutos. `;
  public Titulo23 = `   TRAÇÃO CERVICAL  `;
  
  
  public Video25 = `<iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao25 = `O paciente deverá ser orientado a manter um estilo de vida ativo, realizar exercícios e continuar com as atividades de vida diária. Ele também deverá ser orientado a estar mais atento em como está sua postura e ajusta-la sempre que notar que não estiver na postura correta. `;
  public Titulo25 = `   ORIENTAÇÕES `;
  

  
  public Video27 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/5cbnTZ8yDFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao27 = `Paciente sentado, irá realizar protração da mandíbula e realizar uma leve pressão com as mãos embaixo no do queixo no sentido de baixo para cima e irá estender o pescoço, pode ser realizado 1 série de 1minuto de sustentação ou 2 séries de 30segundos.
   `;
  public Titulo27 = `   ALONGAMENTO ATIVO: FLEXORES  `;
  
  public Video28 = ` <iframe width="340" height="315" src=
  "https://www.youtube.com/embed/qwbOMvb2QiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao28 = `Paciente sentado, mãos apoiadas na parte occipital de crânio, deixar que o peso das mãos realize o movimento de flexão do pescoço, alongado assim a porção posterior da cervical, pode ser realizado uma série de 1minuto de sustentação ou duas séries de 30segundos.`;
  public Titulo28 = `   ALONGAMENTO ATIVO: EXTENSORES  `;
  
  
  public Video29 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/1F3_QrKz1ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao29 = `Paciente sentado, posiciona uma das mãos no lado contralateral da região parietal da cabeça, deixando que o peso da mão realize assim o movimento de inclinação cervical para um dos lados. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo29 = `   ALONGAMENTO ATIVO: INCLINADORES  `;
  
  public Video30 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/lWTOzzd6uZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao30 = `Com uma das mãos apoiadas na região mentoniana de um lado do rosto, o paciente deverá empurrar gradativamente realizando a rotação do pescoço. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo30 = `   ALONGAMENTO ATIVO: ROTADORES  `;
  
  public Video31 = `<iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao31 = `Orientar paciente a retornar as atividades diárias normalmente, e aconselhar para diminuir o uso do colar cervical, caso necessário. 
  Prognostico: o paciente deve melhorar em 2 ou 3 meses. `;
  public Titulo31 = `   ORIENTAÇÕES `;
  
  
  public Video32 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7OLDFfC4nto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao32 = `Paciente deitado em prono, o terapeuta ira posicionar as mãos na região parietal do paciente e realizar passivamente a flexão total do pescoço ou até o limiar de dor. `;
  public Titulo32 = `   MOBILIZAÇÃO PASSIVA: FLEXÃO  `;
  
  public Video33= `  <iframe width="340" height="315" src="https://www.youtube.com/embed/stRwD1p--gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao33 = `Paciente deitado em decúbito dorsal, o terapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente de a superfície da maca, em seguida, realizar passivamente a inclinação do pescoço para ambos os lados até o limiar do movimento. `;
  public Titulo33 = `   MOBILIZAÇÃO PASSIVA: INCLINAÇÃO LATERAL  `;
  
  
  public Video34 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/vr3ObRgPLn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao34 = `Paciente deitado em decúbito dorsal, o fisioterapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente e da superfície da maca, em seguida, realizar passivamente a rotação do pescoço para ambos os lados alternadamente, até o limiar do movimento.`;
  public Titulo34 = `   MOBILIZAÇÃO PASSIVA: ROTAÇÃO  `;
  
  
  public Video35 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao35= `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo35 = `   EXERCÍCIO DE FORTALECIMENTO PARA PESCOÇO: FLEXORES`;
  
  
  
  public Video36 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao36 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo36 = `   EXERCÍCIO DE FORTALECIMENTO PARA PESCOÇO: EXTENSORES`;
  
  
  
  public Video37 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao37 = `Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo37 = `   EXERCÍCIO DE FORTALECIMENTO PARA PESCOÇO: INCLINADORES`;
  
  public Video38 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao38 = `Exercícios que aprimorem a capacidade cardiovascular, tais como caminhadas, corrida, ciclismo e natação. `;
  public Titulo38 = `   CONDICIONAMENTO AERÓBICO  `;
  
  
  public Video40 = ` <iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao40 = `Verificar se há atrasos no processo de recuperação, caso necessário implementar um programa de reabilitação mais intenso, e de controle da dor.  `;
  public Titulo40 = `   MONITORAR O ESTADO DO PACIENTE  `;
  
  
  
  public Video41 = `<iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao41 = `O fisioterapeuta deverá dar orientações quanto a sua patologia, convivência com a dor, e formas de controle da dor.
  Realizar encorajamento para que o paciente continue com suas atividades de vida diárias e manter as sessões de fisioterapia para controle da dor.
  Deve-se construir um programa individualizado e progressivo com exercícios de força (cervico-toracico), resistência, flexibilidade, coordenação e encorajando (usando princípios da terapia comportamental cognitiva). `;
  public Titulo41 = `   ORIENTAÇÕES `;
  
  
  public Video42 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao42= `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo42 = `   EXERCÍCIO DE MOBILIDADE ATIVA PARA PESCOÇO: FLEXORES`;
  
  
  
  public Video43 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao43 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo43 = `   EXERCÍCIO DE MOBILIDADE ATIVA PARA PESCOÇO: EXTENSORES`;
  
  
  
  public Video44 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao44 = ` Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo44 = `   EXERCÍCIO DE MOBILIDADE ATIVA PARA PESCOÇO: INCLINADORES`;
  
  
  public Video45 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/TYgg41PU7YU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao45 = `Com o auxílio de uma faixa elástica ou uma toalha, o paciente deverá realizar o exercício de rotação do pescoço, servindo de alavanca para aumentar a amplitude de rotação cervical.`;
  public Titulo45 = `   SELF-SNAG`;
  
  
  
  public Video46 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ZMnRerF6Qi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao46 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo46 = `   MANIPULAÇÃO CERVICAL  `;
  
  
  public Video47 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/tLvW7ybUoOg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao47 = `Com o auxílio de uma faixa elástica ou uma toalha, o paciente deverá realizar o exercício de rotação do pescoço, desta vez a faixa elástica ou a toalha deverá exercer uma resistência contra o movimento, servindo para fortalecimento dos músculos rotadores.
  `;
  public Titulo47 = `   SELF-SNAG`;
  
  public Video48 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7OLDFfC4nto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao48 = `Paciente deitado em prono, o terapeuta ira posicionar as mãos na região parietal do paciente e realizar passivamente a flexão total do pescoço ou até o limiar de dor. `;
  public Titulo48 = `   MOBILIZAÇÃO PASSIVA: FLEXÃO  `;
  
  public Video49 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/stRwD1p--gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao49 = `Paciente deitado em decúbito dorsal, o terapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente de a superfície da maca, em seguida, realizar passivamente a inclinação do pescoço para ambos os lados até o limiar do movimento. `;
  public Titulo49 = `   MOBILIZAÇÃO PASSIVA: INCLINAÇÃO LATERAL  `;
  
  
  public Video50 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/vr3ObRgPLn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao50 = `Paciente deitado em decúbito dorsal, o fisioterapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente e da superfície da maca, em seguida, realizar passivamente a rotação do pescoço para ambos os lados alternadamente, até o limiar do movimento.`;
  public Titulo50 = `   MOBILIZAÇÃO PASSIVA: ROTAÇÃO  `;

  
  public Video51 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ZMnRerF6Qi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao51 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo51 = `  MANIPULAÇÃO TORÁCICA E CERVICAL `;
  
  
  public Video52 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7OLDFfC4nto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao52 = `Paciente deitado em prono, o terapeuta ira posicionar as mãos na região parietal do paciente e realizar passivamente a flexão total do pescoço ou até o limiar de dor. `;
  public Titulo52 = `   MOBILIZAÇÃO PASSIVA: FLEXÃO  `;
  
  public Video53 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/stRwD1p--gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao53 = `Paciente deitado em decúbito dorsal, o terapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente de a superfície da maca, em seguida, realizar passivamente a inclinação do pescoço para ambos os lados até o limiar do movimento. `;
  public Titulo53 = `   MOBILIZAÇÃO PASSIVA: INCLINAÇÃO LATERAL  `;
  
  
  public Video54 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/vr3ObRgPLn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao54 = `Paciente deitado em decúbito dorsal, o fisioterapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente e da superfície da maca, em seguida, realizar passivamente a rotação do pescoço para ambos os lados alternadamente, até o limiar do movimento.`;
  public Titulo54 = `   MOBILIZAÇÃO PASSIVA: ROTAÇÃO  `;
  
  public Video55 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/5cbnTZ8yDFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao55 = `Paciente sentado, irá realizar protração da mandíbula e realizar uma leve pressão com as mãos embaixo no do queixo no sentido de baixo para cima e irá estender o pescoço, pode ser realizado 1 série de 1minuto de sustentação ou 2 séries de 30segundos.
   `;
  public Titulo55 = `   ALONGAMENTO ATIVO: FLEXORES  `;
  
  public Video56 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/qwbOMvb2QiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao56 = `Paciente sentado, mãos apoiadas na parte occipital de crânio, deixar que o peso das mãos realize o movimento de flexão do pescoço, alongado assim a porção posterior da cervical, pode ser realizado uma série de 1minuto de sustentação ou duas séries de 30segundos.`;
  public Titulo56 = `   ALONGAMENTO ATIVO: EXTENSORES  `;
  
  
  public Video57 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/1F3_QrKz1ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao57 = `Paciente sentado, posiciona uma das mãos no lado contralateral da região parietal da cabeça, deixando que o peso da mão realize assim o movimento de inclinação cervical para um dos lados. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo57 = `   ALONGAMENTO ATIVO: INCLINADORES  `;
  
  public Video58 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/lWTOzzd6uZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao58 = `Com uma das mãos apoiadas na região mentoniana de um lado do rosto, o paciente deverá empurrar gradativamente realizando a rotação do pescoço. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo58 = `   ALONGAMENTO ATIVO: ROTADORES  `;
  
  public Video59 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao59 = `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo59 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: FLEXORES`;
  
  
  
  public Video60 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao60 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo60 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: EXTENSORES`;
  
  
  
  public Video61 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao61 =` Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo61 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: INCLINADORES`;
  
  
  
  public Video62 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/xWZlWpqidvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao62 = `Realizar exercícios que favoreçam a movimentação da articulação escapular, ex.: remadas, elevação escapular, exercícios de ombro.
  `;
  public Titulo62 = `   EXERCÍCIO PARA RESISTÊNCIA DE CINTURA ESCAPULAR `;
  
  
  
  public Video63 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao63 = `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo63 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: FLEXORES`;
  
  
  
  public Video64 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao64 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo64 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: EXTENSORES`;
  
  
  
  public Video65 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao65 = `Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo65 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: INCLINADORES`;
  
  
  public Video68 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/7OLDFfC4nto" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao68 = `Paciente deitado em prono, o terapeuta ira posicionar as mãos na região parietal do paciente e realizar passivamente a flexão total do pescoço ou até o limiar de dor. `;
  public Titulo68 = `   MOBILIZAÇÃO PASSIVA: FLEXÃO  `;
  
  public Video69 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/stRwD1p--gE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao69 = `Paciente deitado em decúbito dorsal, o terapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente de a superfície da maca, em seguida, realizar passivamente a inclinação do pescoço para ambos os lados até o limiar do movimento. `;
  public Titulo69 = `   MOBILIZAÇÃO PASSIVA: INCLINAÇÃO LATERAL  `;
  
  
  public Video70 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/vr3ObRgPLn0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao70 = `Paciente deitado em decúbito dorsal, o fisioterapeuta ira posicionar as mãos na região occipital da cabeça do paciente e eleva-la ligeiramente e da superfície da maca, em seguida, realizar passivamente a rotação do pescoço para ambos os lados alternadamente, até o limiar do movimento.`;
  public Titulo70 = `   MOBILIZAÇÃO PASSIVA: ROTAÇÃO  `;
  
  public Video71 = `  <iframe width="340" height="315" src="https://www.youtube.com/embed/ZMnRerF6Qi0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao71 = `Manipulações torácicas e cervicais, assim como as demais manipulações articulares, devem ser realizadas por profissionais com capacitação para tal. `;
  public Titulo71 = `  MANIPULAÇÃO TORÁCICA E CERVICAL `;
  
  
  public Video72 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/RA_5NeLw-G4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao72 = `Paciente deitado sobre a maca em decúbito dorsal, deverá realizar o movimento de flexão de pescoço, o exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça ou utilizando resistência manual e faixas elásticas.
  `;
  public Titulo72 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: FLEXORES`;
  
  
  
  public Video73 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/8LYHG6zhyF8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao73 = `Paciente posicionado em supino com a cabeça pendendo para fora da maca, será solicitado que ele realize o movimento de extensão da cervical. O exercício pode ser realizado de forma concêntrica, excêntrica ou isométrica. Apenas com o peso da própria cabeça e evoluindo utilizando resistência manual em seguida faixas elásticas. 
  `;
  public Titulo73 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: EXTENSORES`;
  
  
  
  public Video74 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/dAHn3V2Ky0Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao74 = ` Paciente posicionado em decúbito lateral, deverá realizar o exercício de inclinação lateral até o limite do movimento, podendo ser realizado de forma isométrica, concêntrica ou excêntrica. Utilizando como resistência apenas o peso da própria cabeça, podendo evoluir para resistência manual e uso de pesos ou faixas elásticas.`;
  public Titulo74 = `   EXERCÍCIO PARA RESISTÊNCIA PARA PESCOÇO: INCLINADORES`;
  
  public Video75 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/5cbnTZ8yDFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao75 = `Paciente sentado, irá realizar protração da mandíbula e realizar uma leve pressão com as mãos embaixo no do queixo no sentido de baixo para cima e irá estender o pescoço, pode ser realizado 1 série de 1minuto de sustentação ou 2 séries de 30segundos.
   `;
  public Titulo75 = `   ALONGAMENTO ATIVO: FLEXORES  `;
  
  public Video76 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/qwbOMvb2QiU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao76 = `Paciente sentado, mãos apoiadas na parte occipital de crânio, deixar que o peso das mãos realize o movimento de flexão do pescoço, alongado assim a porção posterior da cervical, pode ser realizado uma série de 1minuto de sustentação ou duas séries de 30segundos.`;
  public Titulo76 = `   ALONGAMENTO ATIVO: EXTENSORES  `;
  
  
  public Video77 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/1F3_QrKz1ow" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao77 = `Paciente sentado, posiciona uma das mãos no lado contralateral da região parietal da cabeça, deixando que o peso da mão realize assim o movimento de inclinação cervical para um dos lados. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo77 = `   ALONGAMENTO ATIVO: INCLINADORES  `;
  
  public Video78 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/lWTOzzd6uZk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao78 = `Com uma das mãos apoiadas na região mentoniana de um lado do rosto, o paciente deverá empurrar gradativamente realizando a rotação do pescoço. Pode ser realizado uma série de 1 minuto de sustentação ou duas séries de 30 segundos para ambos os lados.
   `;
  public Titulo78 = `   ALONGAMENTO ATIVO: ROTADORES  `;
  
  public Video79 = ` <iframe width="340" height="315" src="https://www.youtube.com/embed/xWZlWpqidvI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao79 = `Realizar exercícios que favoreçam a movimentação da articulação escapular, ex.: remadas, elevação escapular, exercícios de ombro.
  `;
  public Titulo79 = `   EXERCÍCIO PARA RESISTÊNCIA DE CINTURA ESCAPULAR `;
  
  
  public Video80 = `<iframe width="340" height="315" src="https://www.youtube.com/embed/7N5AXuK4lB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao80 = `Com o paciente posicionado em decúbito dorsal, o terapeuta deverá apoiar as mãos sobre o parietal do paciente e realizar o mecanismo de tração trazendo o crânio do paciente em sua direção. Para melhor resultado da técnica o fisioterapeuta deverá manter essa posição por alguns minutos. `;
  public Titulo80 = `   TRAÇÃO CERVICAL  `;
  
  public Video81 = `<iframe width="340" height="315" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  public Descricao81 = `O fisioterapeuta deverá dar orientações quanto a sua patologia, convivência com a dor, e formas de controle da dor.
  Realizar encorajamento para que o paciente continue com suas atividades de vida diárias e manter as sessões de fisioterapia para controle da dor.
  Deve-se construir um programa individualizado e progressivo com exercícios de força (cervico-toracico), resistência, flexibilidade, coordenação e encorajando (usando princípios da terapia comportamental cognitiva). `;
  public Titulo81 = `   ORIENTAÇÕES `;

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
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video01,desc: this.Descricao01,tite: this.Titulo01
  });
    modal.present();
  }
 
 
 openModal02() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video02,desc: this.Descricao02,tite: this.Titulo02
  });
    modal.present();
  }
 
 
 openModal03() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video03,desc: this.Descricao03,tite: this.Titulo03
  });
    modal.present();
  }
 
 
 openModal04() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video04,desc: this.Descricao04,tite: this.Titulo04
  });
    modal.present();
  }
 
 
 openModal05() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video05,desc: this.Descricao05,tite: this.Titulo05
  });
    modal.present();
  }
 
 
 openModal06() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video06,desc: this.Descricao06,tite: this.Titulo06
  });
    modal.present();
  }
 
 
 openModal07() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video07,desc: this.Descricao07,tite: this.Titulo07
  });
    modal.present();
  }
 
 
 openModal08() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video08,desc: this.Descricao08,tite: this.Titulo08
  });
    modal.present();
  }
 
 
 openModal09() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video09,desc: this.Descricao09,tite: this.Titulo09
  });
    modal.present();
  }
 
 
 openModal10() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video10,desc: this.Descricao10,tite: this.Titulo10
  });
    modal.present();
  }
 
 
 openModal11() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video11,desc: this.Descricao11,tite: this.Titulo11
  });
    modal.present();
  }
 
 
 openModal12() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video12,desc: this.Descricao12,tite: this.Titulo12
  });
    modal.present();
  }
 
 
 openModal13() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video13,desc: this.Descricao13,tite: this.Titulo13
  });
    modal.present();
  }
 
 
 openModal14() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video14,desc: this.Descricao14,tite: this.Titulo14
  });
    modal.present();
  }
 
 
 openModal15() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video15,desc: this.Descricao15,tite: this.Titulo15
  });
    modal.present();
  }
 
 
//  openModal16() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video16,desc: this.Descricao16,tite: this.Titulo16
//   });
//     modal.present();
//   }
 
 
 openModal17() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video17,desc: this.Descricao17,tite: this.Titulo17
  });
    modal.present();
  }
 
 
 openModal18() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video18,desc: this.Descricao18,tite: this.Titulo18
  });
    modal.present();
  }
 
 
 openModal19() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video19,desc: this.Descricao19,tite: this.Titulo19
  });
    modal.present();
  }
 
 
 openModal20() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video20,desc: this.Descricao20,tite: this.Titulo20
  });
    modal.present();
  }
 
 
 openModal21() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video21,desc: this.Descricao21,tite: this.Titulo21
  });
    modal.present();
  }
 
 
 openModal22() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video22,desc: this.Descricao22,tite: this.Titulo22
  });
    modal.present();
  }
 
 
 openModal23() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video23,desc: this.Descricao23,tite: this.Titulo23
  });
    modal.present();
  }
 
 
//  openModal24() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video24,desc: this.Descricao24,tite: this.Titulo24
//   });
//     modal.present();
//   }
 
 
 openModal25() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video25,desc: this.Descricao25,tite: this.Titulo25
  });
    modal.present();
  }
 
 
//  openModal26() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video26,desc: this.Descricao26,tite: this.Titulo26
//   });
//     modal.present();
//   }
 
 
 openModal27() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video27,desc: this.Descricao27,tite: this.Titulo27
  });
    modal.present();
  }
 
 
 openModal28() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video28,desc: this.Descricao28,tite: this.Titulo28
  });
    modal.present();
  }
 
 
 openModal29() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video29,desc: this.Descricao29,tite: this.Titulo29
  });
    modal.present();
  }
 
 
 openModal30() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video30,desc: this.Descricao30,tite: this.Titulo30
  });
    modal.present();
  }
 
 
 openModal31() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video31,desc: this.Descricao31,tite: this.Titulo31
  });
    modal.present();
  }
 
 
 openModal32() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video32,desc: this.Descricao32,tite: this.Titulo32
  });
    modal.present();
  }
 
 
 openModal33() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video33,desc: this.Descricao33,tite: this.Titulo33
  });
    modal.present();
  }
 
 
 openModal34() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video34,desc: this.Descricao34,tite: this.Titulo34
  });
    modal.present();
  }
 
 
 openModal35() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video35,desc: this.Descricao35,tite: this.Titulo35
  });
    modal.present();
  }
 
 
 openModal36() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video36,desc: this.Descricao36,tite: this.Titulo36
  });
    modal.present();
  }
 
 
 openModal37() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video37,desc: this.Descricao37,tite: this.Titulo37
  });
    modal.present();
  }
 
 
 openModal38() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video38,desc: this.Descricao38,tite: this.Titulo38
  });
    modal.present();
  }
 
 
//  openModal39() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video39,desc: this.Descricao39,tite: this.Titulo39
//   });
//     modal.present();
//   }
 
 
 openModal40() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video40,desc: this.Descricao40,tite: this.Titulo40
  });
    modal.present();
  }
 
 
 openModal41() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video41,desc: this.Descricao41,tite: this.Titulo41
  });
    modal.present();
  }
 
 
 openModal42() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video42,desc: this.Descricao42,tite: this.Titulo42
  });
    modal.present();
  }
 
 
 openModal43() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video43,desc: this.Descricao43,tite: this.Titulo43
  });
    modal.present();
  }
 
 
 openModal44() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video44,desc: this.Descricao44,tite: this.Titulo44
  });
    modal.present();
  }
 
 
 openModal45() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video45,desc: this.Descricao45,tite: this.Titulo45
  });
    modal.present();
  }
 
 
 openModal46() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video46,desc: this.Descricao46,tite: this.Titulo46
  });
    modal.present();
  }
 
 
 openModal47() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video47,desc: this.Descricao47,tite: this.Titulo47
  });
    modal.present();
  }
 
 
 openModal48() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video48,desc: this.Descricao48,tite: this.Titulo48
  });
    modal.present();
  }
 
 
 openModal49() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video49,desc: this.Descricao49,tite: this.Titulo49
  });
    modal.present();
  }
 
 
 openModal50() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video50,desc: this.Descricao50,tite: this.Titulo50
  });
    modal.present();
  }
 
 
 openModal51() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video51,desc: this.Descricao51,tite: this.Titulo51
  });
    modal.present();
  }
 
 
 openModal52() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video52,desc: this.Descricao52,tite: this.Titulo52
  });
    modal.present();
  }
 
 
 openModal53() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video53,desc: this.Descricao53,tite: this.Titulo53
  });
    modal.present();
  }
 
 
 openModal54() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video54,desc: this.Descricao54,tite: this.Titulo54
  });
    modal.present();
  }
 
 
 openModal55() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video55,desc: this.Descricao55,tite: this.Titulo55
  });
    modal.present();
  }
 
 
 openModal56() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video56,desc: this.Descricao56,tite: this.Titulo56
  });
    modal.present();
  }
 
 
 openModal57() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video57,desc: this.Descricao57,tite: this.Titulo57
  });
    modal.present();
  }
 
 
 openModal58() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video58,desc: this.Descricao58,tite: this.Titulo58
  });
    modal.present();
  }
 
 
 openModal59() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video59,desc: this.Descricao59,tite: this.Titulo59
  });
    modal.present();
  }
 
 
 openModal60() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video60,desc: this.Descricao60,tite: this.Titulo60
  });
    modal.present();
  }
 
 
 openModal61() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video61,desc: this.Descricao61,tite: this.Titulo61
  });
    modal.present();
  }
 
 
 openModal62() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video62,desc: this.Descricao62,tite: this.Titulo62
  });
    modal.present();
  }
 
 
 openModal63() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video63,desc: this.Descricao63,tite: this.Titulo63
  });
    modal.present();
  }
 
 
 openModal64() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video64,desc: this.Descricao64,tite: this.Titulo64
  });
    modal.present();
  }
 
 
 openModal65() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video65,desc: this.Descricao65,tite: this.Titulo65
  });
    modal.present();
  }
 
 
//  openModal66() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video66,desc: this.Descricao66,tite: this.Titulo66
//   });
//     modal.present();
//   }
 
 
//  openModal67() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video67,desc: this.Descricao67,tite: this.Titulo67
//   });
//     modal.present();
//   }
 
 
 openModal68() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video68,desc: this.Descricao68,tite: this.Titulo68
  });
    modal.present();
  }
 
 
 openModal69() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video69,desc: this.Descricao69,tite: this.Titulo69
  });
    modal.present();
  }
 
 
 openModal70() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video70,desc: this.Descricao70,tite: this.Titulo70
  });
    modal.present();
  }
 
 
 openModal71() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video71,desc: this.Descricao71,tite: this.Titulo71
  });
    modal.present();
  }
 
 
 openModal72() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video72,desc: this.Descricao72,tite: this.Titulo72
  });
    modal.present();
  }
 
 
 openModal73() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video73,desc: this.Descricao73,tite: this.Titulo73
  });
    modal.present();
  }
 
 
 openModal74() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video74,desc: this.Descricao74,tite: this.Titulo74
  });
    modal.present();
  }
 
 
 openModal75() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video75,desc: this.Descricao75,tite: this.Titulo75
  });
    modal.present();
  }
 
 
 openModal76() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video76,desc: this.Descricao76,tite: this.Titulo76
  });
    modal.present();
  }
 
 
 openModal77() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video77,desc: this.Descricao77,tite: this.Titulo77
  });
    modal.present();
  }
 
 
 openModal78() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video78,desc: this.Descricao78,tite: this.Titulo78
  });
    modal.present();
  }
 
 
 openModal79() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video79,desc: this.Descricao79,tite: this.Titulo79
  });
    modal.present();
  }
 
 
 openModal80() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video80,desc: this.Descricao80,tite: this.Titulo80
  });
    modal.present();
  }
 
 
 openModal81() {
    const modal = this.modalCtrl.create(AdmativaPage2,{
      vide: this.Video81,desc: this.Descricao81,tite: this.Titulo81
  });
    modal.present();
  }
 
 
//  openModal82() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video82,desc: this.Descricao82,tite: this.Titulo82
//   });
//     modal.present();
//   }
 
 
//  openModal83() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video83,desc: this.Descricao83,tite: this.Titulo83
//   });
//     modal.present();
//   }
 
 
//  openModal84() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video84,desc: this.Descricao84,tite: this.Titulo84
//   });
//     modal.present();
//   }
 
 
//  openModal85() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video85,desc: this.Descricao85,tite: this.Titulo85
//   });
//     modal.present();
//   }
 
 
//  openModal86() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video86,desc: this.Descricao86,tite: this.Titulo86
//   });
//     modal.present();
//   }
 
 
//  openModal87() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video87,desc: this.Descricao87,tite: this.Titulo87
//   });
//     modal.present();
//   }
 
 
//  openModal88() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video88,desc: this.Descricao88,tite: this.Titulo88
//   });
//     modal.present();
//   }
 
 
//  openModal89() {
//     const modal = this.modalCtrl.create(AdmativaPage2,{
//       vide: this.Video89,desc: this.Descricao89,tite: this.Titulo89
//   });
//     modal.present();
//   }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}