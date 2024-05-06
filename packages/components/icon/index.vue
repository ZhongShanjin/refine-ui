<template>
  <svg class="icon" aria-hidden="true" @click="handlerClick">
    <use :xlink:href="IconName"></use>
  </svg>
</template>

<script>
import "../../assets/js/iconfont.js";

export default {
  name: "r-icon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  computed: {
    IconName() {
      return `#icon-${this.name}`;
    },
  },
  methods: {
    handlerClick($event) {
      this.$emit("click", $event);
    },
  },
};
</script>

<style type="text/css">
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
