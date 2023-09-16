<template>
    <div class="list-card">
      
      <div id="gif">
        <b-card
          :title= "name"
          :img-src="img"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          
        >
          <b-card-text>
            {{ text }}
          </b-card-text>
        </b-card>
      </div>
  
    </div>
  </template>
  
<script>
  export default {
    props:{
      img:  String,
      name: String,
      text: String,
    },

  };
</script>
