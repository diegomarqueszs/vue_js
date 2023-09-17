<template>
    <div class="container">
  <div class="row">
    <div class="col-md-6 texto">
      <h2>TEM ALGUMA DÚVIDA?</h2>
      <p>VAMOS CONVERSAR</p>
      <p>Temos uma equipe pronta para conversar com você e esclarecer quaisquer dúvidas sobre a nossa empresa, nossos serviços e processos.</p>
    </div>
    <div class="col-md-6">
      <form>
        <div class="form-group">
          <label for="inputNome">Nome</label>
          <input type="text" class="form-control" id="inputNome" placeholder="Digite seu nome">
        </div>
        <div class="form-group">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="Digite seu email">
        </div>
        <div class="form-group">
          <label for="inputMensagem">Mensagem</label>
          <textarea class="form-control" id="inputMensagem" rows="5" placeholder="Digite sua mensagem"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">PRESS SELECT</button>
      </form>
    </div>
  </div>
</div>

</template>

<script>
export default {

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
        margin-top: 100px;
        color: white;
        display: flex;
    }
    .btn{
        font-size: 20px;
        color: #ff5a00;
        font-weight: bold;
        font-family: '8 BIT', normal;
        width:100%;
        background-color: #ffbc00;
        box-shadow: 0 6px 0px #ff5a00;
        border: none;
        margin-top: 30px;
    }
    
    .btn:hover{
        width:100%;
        background-color: #ff9100;
        box-shadow: 0 6px 0px #ff5a00;
        border: none;
        margin-top: 30px;
    }

</style>