<template>
  <div>
    <nav>
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/property">Property</router-link>
    </nav>
  </div>
</template>

<script>
import Home from "../views/Home.vue"
import Property from "../views/Property.vue"

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
