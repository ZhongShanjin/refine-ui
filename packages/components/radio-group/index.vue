<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "r-radio-group",
  props: {
    value: {
      type: [String, Number],
    },
  },
  methods: {
    updateValue(value) {
      this.$emit('input', value);
    }
  },
  provide() {
    return {
      RadioGroup: this,
    };
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
