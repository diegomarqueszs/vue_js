<template>
    <div class="project">
        <div class="project-rigth">
            <div class="project-name" >
                <h1>PROJETO TRAINEE</h1>
                <h3>Caso seja sua primeira vez aqui, clique <a href="#" class="link">aqui</a> para fazer</h3> 
                <h3> o seu cadastro</h3>
                
            </div>
        </div>

        <div class="container mt-5" id="form-login">
            <form @submit="handleSubmit" class="form-todo" form-group>
                <h1 class="title">INICIAR SESSAO</h1>
                <p>
                    <input placeholder="PLAYER" type="text" 
                    name="player" class="form-control" v-model.trim="email" />
                    <span v-if="!$v.email.required && $v.email.$dirty">você esqueceu de digitar seu email!</span>
                    <span v-if="!$v.email.email && $v.email.$dirty">Formato de e-mail invalido!</span>
                </p>
                <p>
                    <input placeholder="PASSWORD" type="password" 
                    name="password" class="form-control" v-model.trim="password"/>
                    <span v-if="!$v.password.required && $v.password.$dirty">você esqueceu de digitar sua senha!</span>

                </p>

                <p class="button" >
                    <button type="submit" class="btn">PRESS SELECT</button>
                </p>

                
                <a href="#">Esqueci minha senha</a>
            </form>
            <div class="gif-container">
                <img :src="showGif ? mario.gif : mario.img" class="mario-gif" />
            </div>
        </div>

    </div>
</template>

<script>

import { validationMixin } from "vuelidate"
import { required, email } from "vuelidate/lib/validators"

export default{
    name: 'login_box',
    validations: {
        email: { required , email },
        password: { required },
    },
    data: () =>({
        email: '',
        password: '',
        fieldInvalid: null,
        showGif: false,
        mario: {
            img: require("../assets/img/mario_image.gif"),
            gif: require("../assets/gif/mariojump2.gif")
        },
    }),
    methods: {
        async handleSubmit(event){
            event.preventDefault();
            this.$v.$touch();
            this.fieldInvalid = this.$v.$invalid;
            if (!this.$v.$invalid) {
                this.showGif = true; // Atualiza a propriedade showGif para true
                //this.$router.push('/home');
                await new Promise(resolve => {
                    setTimeout(resolve, 1750); // Defina o tempo de atraso em milissegundos (2 segundos no exemplo)
                });
                this.showGif = false;
            }
        },
    },
    mixins: [validationMixin],
}


</script>



<style scoped>

@font-face {
    font-family: '8 BIT';
    src: url('../assets/font/8-BIT\ WONDER.TTF') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SUPER MARIO';
    src: url('../assets/font/SUPER\ MARIO.ttf ') format('truetype');
    font-weight: normal;
    font-style: normal;
}


input {
    background-color: #E4E4E4;
    font-size: 0.8rem;
    padding: 15px;
}
.btn:hover{
    /*verificar porque as bordas nao sao incluidas*/
    color:#FFA826;
    background-color: #1B2D50;
    border-radius: 5;
    outline: none;
    border: none;
}

.project{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
}

.project-rigth{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/img/img_login2.png');
    background-size: cover;
    
}


.project-name{
    margin: 6%;
    color: #E4E4E4;
}

.project-name h1 {
    font-family: 'SUPER MARIO', sans-serif;
    font-size: 70px;
    margin: 0;
}

.project-name h3 {
    font-weight: 350;
}

.link {
    color: #1B2D50;
    font-weight: bold;
    text-decoration: none;
}

#form-login{
    display: flex;
    flex-direction: column;

    align-items: center;
    /*font-family: 'Press Start 2P', cursive;*/
    font-family: '8 BIT', normal;
    color: #1B2D50;
    margin-right: 8%;
    margin-left: 8%;
    width: 30vw;
}

#form-login a{
    
    text-align: center;
    font-size: 13px;
    color: #1B2D50;
    text-decoration: none;
}

#form-login span{
    color: rgb(242, 67, 67);
    font-family: 'Open Sans', sans-serif;
    font-weight: 550;
    font-style: italic;

}

.form-todo{
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-direction: center;
    width: 100%;
}
.btn {
    width: 100%;
    color: white;
    padding: 10px;
    margin-top: 10px;
    background-color: #FFA826;

}

.title{
    font-size: 20px;
    text-align: center;
    margin-bottom: 35px;
}
.gif-container {
  position: relative;
  width: 100%;
  height: 0%;
  padding-bottom: 49%;  
  margin-top: 20px; 
  z-index: -1; /*ver como alterar dinamicamente */
  
}
.mario-gif {
  position:absolute ;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  max-width: 100%;
  height: auto;
}
</style>

