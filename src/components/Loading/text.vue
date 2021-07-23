<template>
  <div class="test-container">
    <Loading v-if="isloading" />
    <button @click="isloading = !isloading">click</button>
  </div>
</template>

<script>
import Loading from "./index.vue";
export default {
  data() {
    return {
      isloading: true,
    };
  },
  components: {
    Loading,
  },
};
</script>

<style scoped>
.test-container {
  position: relative;
}
</style>