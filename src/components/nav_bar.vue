<template>
    <div>
      <b-navbar toggleable="lg" type ="dark" variant="black">
        <div class="container navbar-container">
          <b-navbar-brand class="brand">
            <img src="../assets/img/LogoComp.png" alt="Logo da marca" style="width: 45px; height: auto;">
          </b-navbar-brand>
          
          <b-row v-for="index in 3" :key="index" class="heart">
              <b-img :src="imgUrl" fluid alt="Imagem" style="width: 65px; height: auto;"></b-img>
            </b-row>
          <b-navbar-toggle target="navbar-toggle-collapse"></b-navbar-toggle>
  
          <b-collapse id="navbar-toggle-collapse" is-nav class="mr-auto justify-content-end ">
            <b-navbar-nav class="mr-auto itens">
              
              <b-nav-item href="#quem-somos" class="mx-3">Quem somos</b-nav-item>
              <b-nav-item class="mx-3">Projetos</b-nav-item>
              <b-nav-item class="mx-3">contatos</b-nav-item>
  
              <b-nav-form >
                <b-form-input placeholder="Search"></b-form-input>
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
      }
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
  
  .itens{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-right: 25px;

  }
  
  </style>