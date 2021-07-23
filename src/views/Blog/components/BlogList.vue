<template>
  <div class="blog-list-container" ref="container" v-loading="isloading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </RouterLink>
        </div>
        <div class="main">
          <RouterLink
            :to="{
              name: 'BlogDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink
              :to="{
                name: 'CategoryBlog',
                params: { categoryId: item.category.id },
              }"
              >{{ item.category.name }}</RouterLink
            >
          </div>
          <div class="desc">{{ item.description }}</div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isloading" />
    <!-- 分页组件 -->
    <Pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import fetchData from "@/mixins/fetchData.js";
import mainScroll from "@/mixins/mainScroll.js";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
import Empty from "@/components/Empty";
export default {
  mixins: [fetchData({ total: 0, rows: [] }), mainScroll("container")],
  components: {
    Pager,
    Empty
  },
  computed: {
    routeInfo() {
      var categoryId = +this.$route.params.categoryId || -1;
      var limit = +this.$route.query.limit || 10;
      var page = +this.$route.query.page || 1;
      return {
        categoryId,
        limit,
        page,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      //跳转到 当前分类的id 当前的页容量  newPage的页码
      //首先判断当前有没有分类id，categoryId如果有则跳转到相关页。没有则跳转到全部文章页
      var query = {
        page: newPage,
        limit: this.routeInfo.limit,
      };
      if (this.routeInfo.categoryId === -1) {
        //当前没有分类id
        this.$router.push({
          name: "Blog",
          query,
        });
      } else {
        //有分类id
        this.$router.push({
          name: "CategoryBlog",
          query,
          params: {
            categoryId: this.routeInfo.categoryId,
          },
        });
      }
      //   console.log(newPage);
    },
  },
  watch: {
    //watch 观察数据变化
    async $route() {
      this.isloading = true;
      //滚动高度为0
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isloading = false;
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  //平滑滚动
  scroll-behavior: smooth;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;
    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;
      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }
    .main {
      flex: 1 1 auto;
      h2 {
        margin: 0;
      }
    }
    .aside {
      font-size: 12px;
      color: @gray;
      span {
        margin-right: 15px;
      }
    }
    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}
</style>