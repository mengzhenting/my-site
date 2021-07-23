<template>
  <div class="text-container">
      <Contact />
  </div>
</template>

<script>
import Contact from "./";
import "@/styles/global.less"
export default {
  components: {
    Contact,
  },
};
</script>

<style lang="less" scope>
// @import "~@/styles/global.less";
.text-container{
    width: 400px;
    height: 600px;
    margin: 0px auto;
    padding-top: 200px;
    background-color: #000;
}
</style>