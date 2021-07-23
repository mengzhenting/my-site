<template>
  <nav class="menu-container">
    <!-- active-class="selected"是吧routerlink中默认的
    类名router-link-active改成selected。
    router-link-exact-active的修改方式是exact-active-class-->
    <router-link
      :exact="item.exact"
      v-for="item in items"
      :key="item.name"
      :to="{ name: item.name }"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
import "@/styles/global.less";
export default {
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "iconzhuye",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "iconblog",
          exact: false, //激活状态是否要精确匹配，
        },
        {
          name: "About",
          title: "关于我",
          icon: "iconset_about_hov",
          exact: true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "iconcode",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "iconliuyan",
          exact: true,
        },
      ],
    };
  },
  components: {
    Icon,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  padding: 24px 0;
  a {
    padding: 0 50px;
    display: block;
    display: flex;
    align-items: center;
    height: 45px;
    .icon {
      width: 24px;
    }
    &:hover {
      color: #fff;
    }
    &.selected {
      background-color: darken(@words, 3%);
    }
  }
}
</style>