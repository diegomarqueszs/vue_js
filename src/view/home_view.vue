<template>
  <div>
    <Navbar />
    <h1>QUEM SOMOS</h1>
    <div class="card-container">
      <card v-for="card in cards" :key="card.id" :img="card.img" :name="card.name" :text="card.text" />
    </div>
  </div>
</template>

<script>
import Navbar from '../components/nav_bar.vue';
import Card from '../components/card_ex.vue';

export default {
  components: { 
    Navbar,
    Card,
  },
  data(){
    return {
      cards: [
        {
          name:'Mario - O dev',
          text: "O Dev é o mestre dos códigos e o criador de mundos digitais. Ele é ágil como um ninja no teclado e possui uma mente brilhante cheia de algoritmos. O Dev está sempre em busca da solução perfeita para cada problema que encontra.",
          img: require('@/assets/gif/mario.gif'),
        },
        {
          name:'Princesa Peach - Gerencia',
          text: "O Gerente é o líder sábio e estrategista do grupo. Ele tem uma visão ampla do projeto e sabe como orientar sua equipe para o sucesso. O Gerente é conhecido por suas habilidades de motivação e por manter o time unido mesmo nos momentos mais desafiadores.",
          img: require('@/assets/gif/peach.gif'),
        },
        {
          name:'Luigi - RH',
          text: "O RH é o especialista em pessoas, responsável por manter o ambiente de trabalho saudável e motivador. Ele se preocupa com o bem-estar dos colaboradores e trabalha para garantir uma cultura empresarial positiva. O RH é conhecido por suas habilidades de comunicação e empatia.",
          img: require('@/assets/gif/luid.gif'),
        },
        {
          name:'Bowser - PO',
          text: "O PO é o guardião do produto e o elo entre a equipe de desenvolvimento e os usuários. Ele tem uma visão clara das necessidades do cliente e trabalha para garantir que o produto atenda às expectativas. O PO é um mestre em priorização e está sempre em busca de feedback valioso.",
          img: require('@/assets/gif/brow.gif'),
        },
      ],
    }   
  }
}
</script>

<style scoped>

  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Ajuste para definir o alinhamento horizontal dos cards */
    align-items: center;
  }
  .card-container > * {
    margin-right: 25px; /* Espaçamento entre os cards */
    
  }

  .card-container > *:last-child {
    margin-right: 0;
  }
</style>