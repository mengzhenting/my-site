<template>
  <div class="about-container" v-loading="loading || !srcLoaed">
    <iframe
      v-if="data"
      class="about-content"
      :src="data"
      frameborder="0"
      @load="srcLoaed = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      srcLoaed: false,
    };
  },
  created() {
    this.$store.dispatch("about/fetchAbout");
  },
  computed: mapState("about", ["data", "loading"]),
};
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.about-content {
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
</style>