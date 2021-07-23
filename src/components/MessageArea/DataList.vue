<template>
  <div class="data-list-container">
    <li v-for="item in list" :key="item.id">
      <Avatar :url="item.avatar" :size="44" />
      <div class="data">
        <div class="nickname">{{ item.nickname }}</div>
        <div class="content">{{ item.content }}</div>
        <div class="time">{{ formatDate(item.createDate, true) }}</div>
      </div>
    </li>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
export default {
  components: {
    Avatar,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    formatDate,
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
}
li {
  display: flex;
  border-bottom: 1px solid lighten(@gray, 20%);
  position: relative;
  margin-top: 15px;
}
.data {
  margin-left: 20px;
  padding-bottom: 10px;
  flex: 1 1 auto;
}
.nickname {
  margin-bottom: 10px;
  color: @success;
}
.time {
  position: absolute;
  right: 0;
  top: 5px;
  font-size: 12px;
  color: darkgray;
}
</style>