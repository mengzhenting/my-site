<template>
  <div class="about-container">
    <!-- <iframe
      v-if="data"
      class="about-content"
      :src="data"
      frameborder="0"
      @load="srcLoaed = true"
    ></iframe> -->
    <img src="@/assets/about.jpg" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
</style>