<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->

  <div id="app">
    <header id="app_header">
      <img src="./assets/logo-cn.png" alt="Logo Campus Numérique">
      <div>
        <router-link to="/onenagros">Citations Kaamelott</router-link>

        <router-link to="/villes">Liste Villes</router-link>

        <router-link to="/carte">Carte</router-link>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<!--<script lang="ts">-->
<!--import { Options, Vue } from 'vue-class-component';-->
<!--import HelloWorld from './components/HelloWorld.vue';-->

<!--@Options({-->
<!--  components: {-->
<!--    HelloWorld,-->
<!--  },-->
<!--})-->
<!--export default class App extends Vue {}-->
<!--</script>-->
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent ({
    name: 'App'
  })
  // import { Options, Vue } from 'vue-class-component';
  // import HelloWorld from './components/HelloWorld.vue';
  //
  // @Options({
  //   components: {
  //     HelloWorld,
  //   },
  // })
  // export default class App extends Vue {}
</script>
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  -webkit-font-smoothing: antialiased;-->
<!--  -moz-osx-font-smoothing: grayscale;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
<style>
  html, body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #262626;
  }

  #app_header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #262626;
    padding-right: 20px;
  }

  #app_header img {
    height: 80px;
    padding: 20px;
  }

  #app_header a {
    color: white;
    text-transform: uppercase;
    padding: 20px;
    text-decoration: none;
  }

  #map {
    width: 100%;
    height: 500px;
  }

  #map .marker {
    width: 50px;
    height: auto;
    cursor: pointer;
  }
</style>