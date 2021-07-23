<template>
  <div class="text-container">
    <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./";
import "@/styles/global.less";
export default {
  components: {
    SiteAside,
  },
};
</script>

<style>
.text-container{
    width: 250px;
    height: 100%;
}
</style>