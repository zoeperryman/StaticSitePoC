<template>
  <div v-if="authenticated">
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">

      <!-- component matched by the route will render here -->
      <router-view></router-view>
    </div>
  </div>
  <div v-else>
    <div>
      Loading...
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {

  get authenticated() {
    return this.$store.state.authenticated;
  }

  created() {
    //do something
    this.fetchUser();
  }

  async fetchUser() {
    try {
      const response = await fetch("/.auth/me", {
        method: "GET",
      });

      if (response.ok) {
        const json = await response.json();

        this.$store.commit("setAuthentication", json);
      } else {
        alert(
          "Server returned " + response.status + " : " + response.statusText
        );
      }
    } catch (e) {
      console.log(e);
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>