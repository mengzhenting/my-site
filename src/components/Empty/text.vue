<template>
  <div class="text-container">
    <Empty />
  </div>
</template>

<script>
import Empty from "./";
export default {
  components: {
    Empty,
  },
};
</script>

<style>
.text-container{
    width: 500px;
    height: 500px;
    margin: 0 auto;
    position: relative;
}
</style>