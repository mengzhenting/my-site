<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside />
        </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
import ToTop from "./components/ToTop";
export default {
  name: "App",
  components: {
    SiteAside,
    Layout,
    ToTop,
  },
};
</script>
<style lang="less" scoped>
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  // background-color: red;
}
.aside {
  width: 250px;
  height: 100%;
}
.right {
  width: 150px;
  height: 100%;
  background-color: rgb(117, 69, 69);
}
</style>