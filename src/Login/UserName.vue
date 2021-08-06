<template>
  <div class="user-name">
    <span v-if="status === 'loading'">loading...</span>
    <template v-else-if="status === 'login'">
      <div class="name">{{ user.name }}</div>
      <a class="outLOgin" href="" @click.prevent="handleLoginOut">退出</a>
    </template>
    <router-link v-else to="/login" exact-path>点击登录</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters("loginUser", ["status"]),
    ...mapState("loginUser", ["user"]),
  },
  methods: {
    async handleLoginOut() {
      await this.$store.dispatch("loginUser/loginOut");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.user-name {
  display: inline-block;
  width: 100%;
  color: #fff;
  text-align: center;
  margin-top: 10px;
}
.outLOgin{
  color: rgb(202, 196, 196);
  font-size: 14px;
  cursor: pointer;
}
.name{
    margin-bottom: 15px;
}
/* .user-name a,
.user-name span {
  margin-right: 15px;
} */
</style>