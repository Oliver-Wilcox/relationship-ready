<template>
    <Burger />
  <router-view/>
</template>
<script>
import Burger from "./components/Burger.vue";
export default {
 components: {
    Burger,
 }
}
</script>
<style>
body{
  overflow-x: hidden;
  overflow-y: scroll;
}

html{
  overflow-x: hidden;
  overflow-y: scroll;
}
</style>
