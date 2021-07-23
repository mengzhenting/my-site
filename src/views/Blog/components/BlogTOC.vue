<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./RightList.vue";
import { debounce } from "@/utils";
export default {
  components: {
    RightList,
  },
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },

  computed: {
    //根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isSelect: t.anchor == this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    doms() {
      const doms = [];
      const addToDome = (toc) => {
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if (t.children && t.children.length) {
            addToDome(t.children);
          }
        }
      };
      addToDome(this.toc);
      return doms;
    },
  },
  created() {
    this.setSetDebounce = debounce(this.setSelect, 50);
    this.$bus.$on("mainScroll", this.setSetDebounce);
  },
  destroyed() {
    this.$bus.$off("mainScroll", this.setSetDebounce);
  },
  methods: {
    handleSelect(item) {
      // console.log(item);
      location.hash = item.anchor;
    },
    //设置activeAnchor为正确的值
    setSelect(scrollDom) {
      if(!scrollDom){
        return;
      }
      this.activeAnchor = ""; //由于后续要重新设置，先清空之前的状态
      const rang = 200;
      for (const dom of this.doms) {
        //看一下当前dom元素是不是应该被选中
        if (!dom) {
          continue;
        }
        //得到元素离视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if (top >= 0 && top <= rang) {
          //在规定的范围内
          this.activeAnchor = dom.id;
        } else if (top > rang) {
          //在规定范围下方
          return;
        } else {
          //在规定的范围上方
          this.activeAnchor = dom.id; //先假设自己是激活的，然后看后面
        }
      }
    },
  },
};
</script>


<style lang="less" scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>