<template>
  <div id="app">
    <Burger />
  <Cursor />
  <router-view/>
  </div>
</template>
<script>
import Burger from "./components/Burger.vue";
import Cursor from "./components/Cursor.vue"

export default {
 components: {
    Burger,
    Cursor
 }
}
</script>
<style>



#app {
  font-family: BonVivant;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #544a3f;
position: absolute;
  font-weight: normal;
height: 100vh;
width: 100vw;
}
.title-container:hover > .cursor{
  display: none;
}

body {
  background: #efebe6;
  padding: 0;
  margin: 0;
  overflow-x:hidden;
  overflow-y: auto;
  height: 100%;

}

html{
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
