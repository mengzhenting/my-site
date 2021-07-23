<template>
  <div
    v-loading="loading"
    class="home-container"
    ref="container"
    @wheel="handelWheel($event)"
  >
    <ul
      class="carousel-container"
      :style="{ marginTop }"
      @transitionend="transitionend"
    >
      <li v-for="item in data" :key="item.id">
        <Carousellitem :carousel="item" />
      </li>
    </ul>
    <div v-show="index >= 1" @click="switchTo(index - 1)" class="icon icon-up">
      <Icon type="iconiconfonticonfonti2copy" />
    </div>
    <div
      v-show="index < data.length - 1"
      @click="switchTo(index + 1)"
      class="icon icon-down"
    >
      <Icon type="iconiconfonticonfonti2" />
    </div>
    <ul class="indicater">
      <li
        :class="{ active: i === index }"
        v-for="(item, i) in data"
        :key="item.id"
        @click="switchTo(i)"
      ></li>
    </ul>
    <!-- <Loading v-if="isloading" /> -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Carousellitem from "./Carousellitem.vue";
// import { getBanners } from "@/api/banner";
import Icon from "@/components/Icon";
// import fetchData from "@/mixins/fetchData.js"
// import Loading from "@/components/Loading";
export default {
  //混入公共方法
  // mixins:[fetchData([])],
  data() {
    return {
      // isloading: true,
      // banners: [],
      index: 0, //当前显示的是第几张轮播图
      containerHeight: 0, //整个容器的高度
      switching: false,
    };
  },
  components: {
    Carousellitem,
    Icon,
    // Loading,
  },
  created() {
    this.$store.dispatch("banner/fetchBanner")
  },
  // async created() {
  //   this.banners = await getBanners();
  //   this.isloading = false;
  // },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener("resize", this.handleResize);
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"])
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    //调用混入的方法获取数据
    // async fetchData(){
    //   return await getBanners()
    // },
    handleResize() {
      return (this.containerHeight = this.$refs.container.clientHeight);
    },
    switchTo(i) {
      this.index = i;
    },
    handelWheel(e) {
      if (this.switching) {
        return;
      }
      if (e.deltaY < -5 && this.index > 0) {
        //向上滚动
        this.switching = true;
        this.index--;
      } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
        // 向下滚动
        this.switching = true;
        this.index++;
      }
    },
    transitionend() {
      this.switching = false;
    },
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/global.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #34495e;
  overflow: hidden;
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}
.icon {
  .self-center();
  font-size: 30px;
  color: @gray;
  cursor: pointer;
  @gap: 25px;
  transform: translateX(-50%);
  &.icon-up {
    top: @gap;
    animation: jump-up 2s infinite;
  }
  &.icon-down {
    bottom: @gap;
    top: auto;
    animation: jump-down 2s infinite;
  }
  @jump: 8px;
  @keyframes jump-up {
    0% {
      transform: translate(-50%, @jump);
    }
    50% {
      transform: translate(-50%, -@jump);
    }
    100% {
      transform: translate(-50%, @jump);
    }
  }
  @keyframes jump-down {
    0% {
      transform: translate(-50%, -@jump);
    }
    50% {
      transform: translate(-50%, @jump);
    }
    100% {
      transform: translate(-50%, -@jump);
    }
  }
}
.indicater {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: @words;
    cursor: pointer;
    margin-bottom: 10px;
    border: 1px solid #fff;
    box-sizing: border-box;
    &.active {
      background-color: #fff;
    }
  }
}
</style>