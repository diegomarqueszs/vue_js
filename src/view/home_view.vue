<template>
  <div>
    <Navbar />
    <div class="home">
      
      <img class="ps-diego" src="../assets/img/PS-DIEGO.png"/>
      <img class="clouds_img" src="../assets/img/clouds.png"/> 
      <img class="clouds_img2" src="../assets/img/clouds.png"/> 
      <svg class="" id="clouds_div" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><path transform="" d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z"></path></svg>
      <div class="fase1" id="quem-somos">
        <img class="name_fase" src="../assets/img/fase1.png"/>
        <!--QUEM SOMOS-->
        <h1>QUEM SOMOS</h1>
        <div class="card-container">
          <card v-for="card in cards" :key="card.id" :img="card.img" :name="card.name" :text="card.text" />
        </div>
        <div class="text-equipe">
          <p class="p_1">Através do desenvolvimento de sites, sistemas web e aplicativos procuramos 
          sempre solucionar os problemas de nossos clientes. Temos como objetivo agregar valor ao seu serviço, 
          provendo um produto de qualidade. Contamos com uma equipe de apaixonados pela tecnologia que, com muita seriedade e profissionalismo, 
          trabalha diariamente para desenvolver sua solução.</p>
          <p class="p_2">Contamos com uma equipe de apaixonados pela tecnologia que, com muita seriedade e profissionalismo, 
            trabalha diariamente para desenvolver sua solução.</p>
          <p class="p_3">Utilizamos tecnologias atuais que permitem um desenvolvimento dinâmico, como a 
            metodologia ágil, dando grande abertura para o cliente durante todos os processos.</p>                
        </div>

        <br/>
      </div>
      <svg class="clouds-module--inverted--1gkaG" id="clouds_div" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 100" preserveAspectRatio="none"><path transform="scale(1, -1) translate(0, -100)" d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z"></path></svg>
      <h3 style="color: white; font-weight: 350; font-size: 25px;">"Criatividade Jovem Compromisso Profissional"</h3>
      
      <div class="fase2" id="projetos">
        <img class="name_fase" src="../assets/img/fase2.png"/>
        <!--PROJETOS-->
        <h1 >PROJETOS</h1>   
        <vue-carousel :data="data">
          <template v-slot="{ slide }">
            <img :src="slide" alt="Slide" class="carousel-slide" />
          </template>
        </vue-carousel>

        <img class="clouds_img3" src="../assets/img/clouds.png"/> 
        <img class="clouds_img4" src="../assets/img/clouds.png"/>  
        <img class="cano" src="../assets/img/cano.png">
        <div class="fase3">
        
          <img class="floor" src="../assets/img/floor2.png"/>
          <img class="name_fase" src="../assets/img/fase3.png" id="contatos"/>
          <Form  class="form_contato"/>
          
        </div>
        
      </div>
    </div>

    
   
  </div>
</template>

<script>


import Navbar from '../components/nav_bar.vue';
import Card from '../components/card_ex.vue';
import Form from '../components/form_ex.vue';
import VueCarousel from '../components/vue_carousel.vue';

export default {
  components: { 
    Navbar,
    Card,
    Form,
    VueCarousel: {
      component: VueCarousel,
      name: 'VueCarousel'
    },
  },
  data(){
    return {
      cards: [
        {
          name:'Mario - Marketing',
          text: "O Dev é o mestre dos códigos e o criador de mundos digitais. Ele é ágil como um ninja no teclado e possui uma mente brilhante cheia de algoritmos. O Dev está sempre em busca da solução perfeita para cada problema que encontra.",
          img: require('@/assets/gif/mario.gif'),
        },
        {
          name:'Princesa Peach - Presidencia',
          text: "O Gerente é o líder sábio e estrategista do grupo. Ele tem uma visão ampla do projeto e sabe como orientar sua equipe para o sucesso. O Gerente é conhecido por suas habilidades de motivação e por manter o time unido mesmo nos momentos mais desafiadores.",
          img: require('@/assets/gif/peach.gif'),
        },
        {
          name:'Luigi - Gestão de Pessoas',
          text: "O RH é o especialista em pessoas, responsável por manter o ambiente de trabalho saudável e motivador. Ele se preocupa com o bem-estar dos colaboradores e trabalha para garantir uma cultura empresarial positiva. O RH é conhecido por suas habilidades de comunicação e empatia.",
          img: require('@/assets/gif/luid.gif'),
        },
        {
          name:'Bowser - Projetos ',
          text: "O PO é o guardião do produto e o elo entre a equipe de desenvolvimento e os usuários. Ele tem uma visão clara das necessidades do cliente e trabalha para garantir que o produto atenda às expectativas. O PO é um mestre em priorização e está sempre em busca de feedback valioso.",
          img: require('@/assets/gif/brow.gif'),
        },
      ],
      data: [
        '../assets/img/fase1.png',
        '../assets/img/fase1.png',
        '../assets/img/fase1.png',
      ],
    }   
  }
}
</script>

<style scoped>
  .carousel-slide {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .home{
    position: relative;
    background-color: #5c93fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  h1{
    font-family: '8 BIT', normal;
    margin-bottom: 3%;
    text-align: center;
  }

  #clouds_div{
    fill: white;
  }

  .clouds_img{
    top: 170px;
    left: 10px;
    position: absolute;
    width: 15%;
  }

  .clouds_img2{
    top: 250px;
    right: 85px;
    position: absolute;
    width: 12%;
    transform: scaleX(-1);
  }
  .clouds_img3{
    left: 65px;
    position: absolute;
    width: 15%;
    
  }
  .clouds_img4{
    top: auto;
    right: 85px;
    position: absolute;
    width: 12%;
    transform: scaleX(-1);
  }

  .floor{
    width: 100%;
    height: auto;
  }

  .form_contato{
    width: 100%;
  }

  .ps-diego{
    margin-top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: auto;
  }

  .fase1{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
  }
  .fase2{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .fase3{
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-bottom: 5%;
  }

  .name_fase{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
    height: auto;
  }
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Ajuste para definir o alinhamento horizontal dos cards */
    align-items: start;
   
  }
  .card-container > * {
    margin-right: 25px; /* Espaçamento entre os cards */ 
  }

  .card-container > *:last-child {
    margin-right: 0;
  }

  p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    background: #e82532;
    border-radius: 10px;
    padding: 20px;
    color: white;
    box-shadow: 7px 6px 0px  rgb(47, 6, 6);
    
  }

  p:hover{
    background: #FD5905;
    box-shadow: 7px 6px 0px  rgb(105, 61, 4);
    transform: scale(1.03);
    transition: 0.5s;
    
  }

  .p_2{
    background: #e66699;
    box-shadow: 7px 6px 0px  rgb(198, 25, 91);

  }

  .p_3{
    background: #159e47;
    box-shadow: 7px 6px 0px  rgb(2, 35, 15);

  }

  
  #quem-somos > h1{
    color: #1793A6;
  }
  
  #quem-somos > .text-equipe{
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    margin-top: -6px;
    width: 70%;
    text-align: justify;
    
  }

  #quem-somos  > .text-equipe{
    margin-top: 80px;
    margin-bottom: 80px;
  }

  .carousel_horizontal{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
  }

</style>