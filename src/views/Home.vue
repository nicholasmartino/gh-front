<template>
  <div width="100vw">
    <v-container fluid> 
      <v-row>
          <v-col class="col-7">
              <ThreeScene/>
          </v-col>
          <v-col class="col-5">
              <Floors/>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Floors from "../components/Charts/Floors.vue"
import ThreeScene from "../components/3D/ThreeScene.vue"

export default {
  name: "App",
  components: {
    ThreeScene,
    Floors,
  },
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style>
@import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';

body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
