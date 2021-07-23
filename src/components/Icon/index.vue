<template>
  <i class="iconfont icon-container" :class="type"></i>
</template>
<script>
export default {
  props: {
    //属性名字
    type: {
      type: String, //属性类型
      required: true,
    },
  },
};
</script>
<style scoped>
@import "//at.alicdn.com/t/font_2164449_nalfgtq7il.css";
.iconfont{
    color: inherit;
    font-size: inherit;
}
</style>