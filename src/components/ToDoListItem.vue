<script setup>
defineProps(["livre"]);
const emit = defineEmits(["deleteC", "ajoutC", "enleverC"]);
</script>

<template>

    {{ livre.afficherTitre() }}
    {{ livre.afficherQtestock() }}
    {{ livre.afficherPrix() }}
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans le tableau
          mais directement l'id de la chose
    -->
    <button class="button-75" role="button" @click="$emit('deleteC', livre.id)"><span>Supprimer</span></button>
    <!-- cette fois en param du handler 
          on n'utilise pas l'index dans la tableau 
          mais directement la chose à modifier
    -->
    <button class="button-75" role="button" @click="$emit('ajoutC', livre)"><span>
      {{ livre.fait ? "Défaire" : "+1" }}</span>
    </button>

    <button class="button-75" role="button" @click="$emit('enleverC', livre)"><span>
      {{ livre.fait ? "Défaire" : "-1" }}</span>
    </button>

</template>

<style>

/* CSS */
.button-75 {
  text-align: center;
  margin: auto;
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  border: 0;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  /*flex-direction: column;*/
  font-family: "Codec cold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 20px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 3px;
  text-decoration: none;
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-75:active {
  outline: 0;
}

.button-75:hover {
  outline: 0;
}

.button-75 span {
  transition: all 200ms;
}

.button-75:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  .button-75 {
    font-size: 15px;
    height: 50px;
  }

  .button-75 span {
    line-height: 50px;
  }
}
</style>
