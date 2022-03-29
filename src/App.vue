<template>
  <div width="100vw">
    <v-app>
      <router-view><Home /><Property /></router-view>
    </v-app>
  </div>
</template>

<script>
import Home from "./views/Home.vue"
import Property from "./views/Property.vue"

export default {
  name: "App",
  components: {
    Home,
    Property,
  },
}
</script>

<style>
</style>
