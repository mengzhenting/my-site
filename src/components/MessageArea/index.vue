<template>
  <div class="message-area-container">
    <!--v-on="$listeners"相当于 @submit="handleSubmit"和下面的事件方法 -->
    <DataForm v-on="$listeners" />
    <h3>
      {{ title }} <span>{{ subTitle }}</span>
    </h3>
    <DataList :list="list" />
    <div class="loading" v-loading="isListLoading">{{ name }}</div>
  </div>
</template>

<script>
import DataForm from "./DataForm.vue";
import DataList from "./DataList.vue";
export default {
  components: {
    DataList,
    DataForm,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    list: {
      type: Array,
      default: () => [],
    },
    name: {
      type: String,
      default: "",
    },
    isListLoading: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // handleSubmit(formData, callback) {
    //   this.$emit("submit", formData, callback);
    // },
  },
};
</script>

<style scoped lang="less">
.loading {
  position: relative;
  height: 100px;
  font-size: 12px;
  line-height: 100px;
  text-align: center;
  color: darkgray;
}
</style>