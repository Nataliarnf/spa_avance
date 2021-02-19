npm install -g @vue/cli<template>
  <div id="app">
    <header id="app_header">
      <img src="./assets/logo-cn.png" alt="Logo Campus Numérique">
      <div>
        <router-link to="/villes">Liste</router-link>
        <router-link to="/carte">Carte</router-link>

      </div>
    </header>
    <div id="map" />
    <router-view></router-view>
  </div>
</template>

<script>
  // import mapboxgl from "mapbox-gl";
  // import "mapbox-gl/dist/mapbox-gl.css";
  // import { onMounted } from "vue";
  // export default {
  //   setup() {
  //     onMounted(() => {
  //       mapboxgl.accessToken =
  //               "yourAccessToken";
  //       const map = new mapboxgl.Map({
  //         container: "map",
  //         style: "mapbox://styles/mapbox/light-v9",
  //       });
  //       map.on('load', () => {
  //
  //       });
  //     });
  //     return {};
  //   },

export default {
  name: 'App'


}
</script>

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


