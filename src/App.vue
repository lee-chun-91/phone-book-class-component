<template>
  <div id="app">
    <PageWrapper>
      <nav>
      <router-link to="/">Info List</router-link> |
      <router-link to="/add">Add Info</router-link>
      </nav>
      <router-view/>
    </PageWrapper>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/_index.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import PageWrapper from "@/layouts/PageWrapper.vue";

@Component({
  components: { PageWrapper }
})
export default class App extends Vue {
}
</script>
