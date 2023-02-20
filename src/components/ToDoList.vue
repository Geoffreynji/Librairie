<script setup>
import { reactive, onMounted } from "vue";
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoForm.vue";
import ToDoForm2 from "./ToDoForm2.vue";
import Livre from "../Livre";
import ToDoFooter from "./ToDoFooter.vue";

const listeC = reactive([]);

// -- l'url de l'API
let url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/28/livres"

// -- handle pour supprimer une chose à prtir de l'id de la chose
function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}
// -- handle pour ajouter une nouvelle chose à prtir du libelle saisi dans le formulaire
function handlerAdd(libelle,quantite,prix) {
  console.log(libelle);
  console.log(quantite);
  console.log(prix);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // --  le libelle de la nouvelle chose est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({titre: libelle,qtestock: quantite,prix: prix}),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}

function handlermotcle(motcle) {
  
  console.log(motcle);
  url = url + "?search=" + motcle;
  console.log(url);
  // -- entête http pour la req AJAX
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la Livre modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "GET",
    headers: myHeaders,
    //body: JSON.stringify({id: id, titre: titre, qtestock: qtestock, prix: prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      //console.log(dataJSON);
      // actualiser la liste des Livres
      getTodos();
    })
    .catch((error) => console.log(error));
}

function handlerAjout(livre)
{
  let titre = livre.titre;
  let qtestock = livre.qtestock +1;
  let prix = livre.prix;
  let id = livre.id;

  console.log(titre);
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la Livre modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({id: id, titre: titre, qtestock: qtestock, prix: prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des Livres
      getTodos();
    })
    .catch((error) => console.log(error));
}

function handlerSupprimer(livre)
{
  let titre = livre.titre;
  let qtestock = livre.qtestock -1;
  let prix = livre.prix;
  let id = livre.id;
  if(qtestock == 0)
  {
    handlerDelete(id);
  }
  else
  {

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  // -- la Livre modifiée est envoyé au serveur
  //  via le body de la req AJAX
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({id: id, titre: titre, qtestock: qtestock, prix: prix}),
  };
  // -- la req AJAX
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // actualiser la liste des Livres
      getTodos();
    })
    .catch((error) => console.log(error));
  }
}
// -- req AJAX pour récupérer les todos
//    et les stocker dans le state listeC
function getTodos() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des choses
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Chose
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) => listeC.push(new Livre(v.id, v.titre, v.qtestock,v.prix)));
      url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/28/livres";
    })
    .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getTodos();
});
</script>

<template>
  <ToDoForm2 @rechercheC="handlermotcle"></ToDoForm2>
  <h3>Ajouter un livre </h3>
  <ToDoForm @addC="handlerAdd"></ToDoForm>
  <ul>
    <ToDoListItem
      v-for="livre of listeC"
      :key="livre.id"
      :livre="livre"
      @deleteC="handlerDelete"
      @ajoutC="handlerAjout"
      @enleverC="handlerSupprimer"
    />
  </ul>
<br><br><br>
  <ToDoFooter></ToDoFooter>

</template>

<style scoped>

ul{
  color: red;
  text-align: center;
  font-style: italic;
}

h3
{
  text-align: center;
  color: red;
  font-style: italic;
}
</style>
