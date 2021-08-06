<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <!-- <div class="name">{{ data.siteTitle }}</div> -->
      <UserName />
    </template>

    <Menu />
    <Contact v-if="data" />
    <div v-if="data" class="footer">{{ data.icp }}</div>
  </div>
</template>

<script>
import UserName from "@/Login/UserName.vue";
import Avatar from "@/components/Avatar";
import Contact from "./Contact";
import Menu from "./Menu";
import { mapState } from "vuex";
export default {
  components: {
    Avatar,
    Contact,
    Menu,
    UserName,
  },
  computed: {
    ...mapState("setting", ["data"]),
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.site-aside-container {
  width: 100%;
  height: 100%;
  background-color: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.name {
  margin-top: 10px;
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
}
.footer {
  font-size: 12px;
  text-align: center;
}
</style>