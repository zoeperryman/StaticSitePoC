<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button type = "button" id = "get-joke" @click = "fetchData">Get Data</button>

    <div>{{ result }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  result = "waiting...";
  responseAvailable = false;
  //var apiKey: '<YOUR_RAPIDAPI_KEY>'

  myFunc() {
    let x = 1 + 2;
    x++;

    //x = "a";

    if (x == 4)
    {
      console.log("a");
    }
  }

  async fetchData() {
    this.responseAvailable = false;

    try
    {
      const response = await fetch("/api/message", {
            "method": "GET",
      });

      if(response.ok){
          const json = await response.json();
          this.result = (json as unknown as { x: string }).x; 
          this.responseAvailable = true;
      } else{
          alert("Server returned " + response.status + " : " + response.statusText);
      }   

    }
    catch(e) {
      console.log(e);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
