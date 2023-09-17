<template>
    <div class="container">
        <div class="pag404">
            <img src="../assets/gif/mario404.gif" alt="404" class="img-404">
            <div class="text-404">
                <h1>404</h1>
                <h2>Looks like someone too</h2>
                <h2>many mushrooms...</h2>
                <p class="button" >
                    <button type="submit" class="btn" @click="goBack">PRESS SELECT TO BACK</button>
                </p>
            </div>
         
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pag_404',
    methods: {
    goBack() {
      window.history.back(); // Retorna à página anterior
    }
  }
}
</script>

<style scoped>

.pag404{
    display: flex;
    align-items: center;
    font-family: '8 BIT', normal;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
}


.text-404 > h1{
    font-size: 150px;
    
}

.text-404 > h2{
    font-size: 20px;   
}

.button{
    color: white;
    padding: 10px;
    margin-top: 10px;
}

button{
    background-color: #FFA826;
}

.btn:hover{
    /*verificar porque as bordas nao sao incluidas*/
    color:#FFA826;
    background-color: #1B2D50;
    border-radius: 5;
    outline: none;
    border: none;
}
</style>