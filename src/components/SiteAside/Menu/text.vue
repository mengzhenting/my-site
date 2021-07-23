<template>
  <div class="text-container">
    <Menu />
  </div>
</template>

<script>
import Menu from "./";
export default {
  components: {
    Menu,
  },
};
</script>

<style lang="less" scoped>
.text-container {
  width: 400px;
  height: 600px;
  margin: 0px auto;
  background-color: #000;
}
</style>