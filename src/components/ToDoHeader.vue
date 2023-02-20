<template>
  <div class="header">
<h1><span>La</span><span>librairie</span></h1>
</div>
</template>

<style scoped>
h3 {
  margin: auto;
  text-align: center;
  color: blue;
}

.header{
  padding: 0;
  margin: 0;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1{
  color: #484848;
  font-size: 50px;
  font-weight: bold;
  font-family: monospace;
  letter-spacing: 7px;
  cursor: pointer;
  margin: auto;
  height: 10vh;
}
h1 span{
  transition: .5s linear
}
h1:hover span:nth-child(1){
  margin-right: 5px
}
h1:hover span:nth-child(1):after{
  content: " :)";
}
h1:hover span:nth-child(2){
  margin-left: 30px
}
h1:hover span{
  color: #fff;
  text-shadow: 0 0 10px #fff,
               0 0 20px #fff, 
               0 0 40px #fff;
}

*{
  /*background-image: url('../images/header_font.jpg');*/
  background-image: linear-gradient(25deg,#d64c7f,#ee4758 50%);
  height: 12em;
}

</style>
