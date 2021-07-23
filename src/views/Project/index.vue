<template>
  <div class="project-container" ref="projectContainer" v-loading="loading">
    <div v-for="item in data" :key="item.id" class="project-item">
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
        ><img class="thumb" v-lazy="item.thumb"
      /></a>

      <div class="info">
        <a
          :href="
            item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
          "
          :target="item.url ? '_blank' : '_self'"
          ><h2>
            {{ item.name }}
          </h2></a
        >
        <a class="github" target="_blank" :href="item.github" v-if="item.github">Github</a>
        <p v-for="(desc, i) in item.description" :key="i">{{ desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import mainScroll from "@/mixins/mainScroll.js"
import { mapState } from "vuex";
export default {
  mixins:[mainScroll("projectContainer")],
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  computed: mapState("project", ["loading", "data"]),
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>