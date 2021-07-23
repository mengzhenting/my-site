<template>
  <div>
    <pager :total="302" :current="current" @pageChange="handalPage($event)" />
  </div>
</template>

<script>
import Pager from "./";
export default {
  components: {
    Pager,
  },
  data() {
    return {
      current:1
    }
  },
  methods: {
    handalPage(newPage){
      this.current = newPage
    }
  },
};
</script>
<style lang="less" scoped>
</style>