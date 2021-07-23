<template>
  <img
    class="avatar-container"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String, //url必须是字符串
      required: true, //属性必传
    },
    size: {
      type: Number,
      default: 100, //默认值
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-container {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>