<template>
  <ul class="right-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handelClick(item)" :class="{ active: item.isSelect }">{{
        item.name
      }}</span>
      <span
        @click="handelClick(item)"
        :class="{ active: item.isSelect }"
        v-if="item.aside"
        class="aside"
        >{{ item.aside }}</span
      >
      <RightList :list="item.children" @select="handelClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "RightList",
  props: {
    // [{name:'xxx',isSelect:true,children:[{name:'xxx',isSelect:true}]}]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handelClick(item) {
      // console.log(item)
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.right-list-container {
  list-style: none;
  padding: 0;
  .right-list-container {
    margin-left: 1em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    cursor: pointer;
    font-size: 14px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside {
  color: @gray;
  margin-left: 1em;
  font-size: 12px;
}
</style>