<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const motcle = ref("");
const emit = defineEmits(["rechercheC"]);
</script>

<template>
  <form @submit.prevent="$emit('rechercheC', motcle)">
    <input type="text" v-model="motcle" placeholder="Entrez le mot clé ?" />
    <input type="submit" value="valider" /><br>
    <input type="button" class="refresh" onclick='window.location.reload(false)' value="Revoir la liste"/>
  </form>
</template>


<style scoped>

form {
  text-align: right;
}

input {
  border: none;
  background: hsl(0 0% 93%);
  border-radius: .25rem;
  padding: .75rem 1rem;
  background: rgb(255, 216, 235);
  color: white;
  box-shadow: 0 .75rem .5rem -.5rem hsl(0 50% 80%);
  }

input:hover
{
  transition: 1s;
  border-radius: 30px;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
}

.refresh
{
  border: none;
  background: hsl(0 0% 93%);
  border-radius: 100px;
  padding: .75rem 1rem;
  background: rgb(255, 216, 235);
  color: white;
  box-shadow: 0 .75rem .5rem -.5rem hsl(0 50% 80%);
}

.refresh:hover
{
  transition: 0.2s;
  border-radius: 0px;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
}
</style>
