<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/News">News</router-link>
      |
      <user-name />
    </div>
    <router-view />
  </div>
</template>

<script>
import UserName from "./Login/UserName.vue";
export default {
  components: {
    UserName,
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-link-exact-active{
    color: green;
}
</style>