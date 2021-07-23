<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏</div>
      </template>
      <div class="main">中间</div>
      <template #right>
        <div class="right">右边</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped>
.test-container {
  width: 60%;
  height: 300px;
  background-color: khaki;
  margin: 0 auto;
}
.left {
  width: 200px;
  height: 100%;
  background-color: rgb(173, 162, 162);
}
.main {
  width: 100%;
  height: 100%;
  background-color: rgb(28, 159, 168);
}
.right {
  width: 100px;
  height: 100%;
  background-color: rgb(124, 91, 91);
}
</style>