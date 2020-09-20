<template>
  <div class="home">
    <h1>Welcome {{ userName }} to the admin app</h1>

    <a href="/logout">Logout</a><br/>

    <router-link to="/hello">Hello - Only when logged in</router-link><br/>

  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  get userName() {
    if (this.$store.state.authenticated)
      return this.$store.state.user.userDetails;
    else
      return "";
  }
}
</script>