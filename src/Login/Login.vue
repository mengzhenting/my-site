<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label>账号：</label>
      <input type="text" v-model="loginId" />
    </div>
    <div class="form-item">
      <label>密码：</label>
      <input type="password" autocomplete="new-password" v-model="loginPwd" />
    </div>
    <div class="form-item">
      <label></label>
      <button :disabled="loading">
        {{ loading ? "loading..." : "登录" }}
      </button>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      loginId: "",
      loginPwd: "",
    };
  },
  computed: {
    //写法一
    // ...mapState({
    //   loading: (state) => state.loginUser.loading,
    // }),
    //写法二
    ...mapState("loginUser", ["loading"]),
  },
  methods: {
    async handleSubmit() {
      const resp = await this.$store.dispatch("loginUser/login", {
        loginId: this.loginId,
        loginPwd: this.loginPwd,
      });
      if (resp) {
          const path = this.$route.query.returnurl || "/"
        this.$router.push(path);
      } else {
        alert("账号密码错误");
      }
    },
  },
};
</script>

<style>
.form-item {
  margin: 1em auto;
  width: 300px;
  display: flex;
  align-items: center;
}
input {
  height: 30px;
  width: 150px;
}
button {
  border: none;
  background: green;
  width: 200px;
  text-align: center;
  height: 40px;
  border-radius: 8px;
  color: #fff;
  margin-left: 5px;
}
</style>