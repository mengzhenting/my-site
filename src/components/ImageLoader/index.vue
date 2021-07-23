<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" class="placeholder" :src="placeholder" />
    <!-- $load图片自带的load事件 -->
    <img
      :style="{ opacity: originOpacity, transition: `${duration}ms` }"
      @load="handleLoad"
      class="origin"
      :src="src"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      originLoaded: false, //原图是否加载完成
      everythingDone: false, //图片加载完成后，让站位图隐藏
    };
  },
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
      // required: true,
    },
  },
  computed: {
    originOpacity() {
      return this.originLoaded ? 1 : 0;
    },
  },
  methods: {
    handleLoad() {
      this.originLoaded = true;
      setTimeout(() => {
        this.everythingDone = true;
        this.$emit('load')
      }, this.duration);
    },
  },
};
</script>

<style lang="less" scope>
@import "~@/styles/mixin.less";
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  img {
    .self-fill();
    object-fit: cover;
  }
  .placeholder {
    filter: blur(2vw);
  }
}
</style>