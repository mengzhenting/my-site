<template>
  <RightList :list="list" @select="handelSelect" />
</template>

<script>
import RightList from "./RightList.vue";
export default {
  data() {
    return {
      list: [
        { name: "a", isSelect: false },
        {
          name: "b",
          isSelect: true,
          children: [
            { name: "b-1", isSelect: false },
            {
              name: "b-2",
              isSelect: false,
              children: [
                { name: "b-11", isSelect: false },
                { name: "b-22", isSelect: false },
                { name: "b-33", isSelect: false },
              ],
            },
            { name: "b-3", isSelect: false },
          ],
        },
        { name: "c", isSelect: false },
        { name: "d", isSelect: false },
      ],
    };
  },
  components: {
    RightList,
  },
  methods: {
    handelSelect(item) {
      item.isSelect = true;
      console.log(item);
    },
  },
};
</script>

<style>
</style>