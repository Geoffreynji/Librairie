<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const libelle = ref("");
const quantite= 0;
const prix = 0;

const emit = defineEmits(["addC"]);
</script>

<template>
  <form @submit.prevent="$emit('addC', libelle,quantite,prix)">
    <input type="text" v-model="libelle" placeholder="Entrez un titre" />
    <input type="text" v-model="quantite" placeholder="La quantité ?" />
    <input type="text" v-model="prix" placeholder="Prix ?" />
    <input type="submit" value="valider" />
  </form>


</template>


<style scoped>
form {
  text-align: center;
}

input {
  border: none;
  background: hsl(0 0% 93%);
  border-radius: .25rem;
  padding: .75rem 1rem;
  background: rgb(255, 216, 235);
  color: black;
  box-shadow: 0 .75rem .5rem -.5rem hsl(0 50% 80%);
  }

input:hover
{
  transition: 1s;
  border-radius: 30px;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
}

</style>
