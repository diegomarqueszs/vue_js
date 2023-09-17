<template>
    <div class="navbar">
      <b-navbar toggleable="lg" type ="dark" variant="black">
        <div class="container navbar-container">
          <b-navbar-brand class="brand">
           <a href="#">
            <img src="../assets/img/LogoComp.png" alt="Logo da marca" style="width: 45px; height: auto;">
           </a>
          </b-navbar-brand>
          
          <b-row v-for="index in interacoes" :key="index" class="heart">
            <b-img :src="imgUrl" fluid alt="Imagem" style="width: 65px; height: auto;"></b-img>
          </b-row>
          <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
  
          <b-collapse id="navbar-toggle-collapse" is-nav class="mr-auto justify-content-end ">
            <b-navbar-nav class="mr-auto itens">
              
              <b-nav-item href="#quem-somos" class="mx-3">Quem somos</b-nav-item>
              <b-nav-item href="#projetos" class="mx-3">Projetos</b-nav-item>
              <b-nav-item href="#contatos" class="mx-3">contatos</b-nav-item>
  
              <b-nav-form>
                <b-form-input placeholder="Pesquisar" class="pesquisar"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0 btn" type="submit">buscar</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </template>
  
  <script>
  export default {
    data(){
      return {
        imgUrl: require('../assets/img/heart.png'),
        interacoes: 3,
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Verifica a posição do scroll
        if(window.scrollY < 550){
          this.interacoes = 3;
        }

        if (window.scrollY > 700 && window.scrollY < 800) {
          // Atualiza o número máximo de iterações do v-for para 2
          this.interacoes = 2;
        }
        if (window.scrollY > 1000 && window.scrollY < 2900) {
          // Atualiza o número máximo de iterações do v-for para 2
          this.interacoes = 1;
        }
        if (window.scrollY > 3000) {
          // Atualiza o número máximo de iterações do v-for para 2
          this.interacoes = 0;
        }
      },
    },
  }
  </script>
  
  <style scoped>
  
  @font-face {
      font-family: '8 BIT';
      src: url('../assets/font/8-BIT\ WONDER.TTF') format('truetype');
      font-weight: normal;
      font-style: normal;
  }
  
  .container{
    
    margin: 0;
    display: flex;
    flex-direction: row;
    font-family: '8 BIT', normal;
  }

  .navbar-container {
    max-width: 100%; 
  }
  
  .heart {
    display: flex;
    justify-content: space-between;
  }

  .pesquisar{
    font-size: 13px;
    height: 25px;
  }
  
  .itens{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 25px;

  }

  .navbar{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    margin-bottom: 20px;
    z-index: 2;
  }
  .form-inline{
    display: flex;
    flex-direction: row;
    gap: 10px;
   
    align-items: center;
  }

  .btn{
    font-size: 12px;
    background-color: #ffbc00;
    border: none;
  }
  
  .btn:hover{
    font-size: 12px;
    background-color: #ff5a00;
    border: none;
  }
  </style>