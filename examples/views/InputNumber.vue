<template>
  <div class="input-number-container">
    <r-inputnumber
      :max="10"
      :min="0"
      :step="0.5"
      :precision="1"
      v-model="count"
    ></r-inputnumber>
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
export default {
  // 定义data为一个函数而不是直接返回一个对象的原因是为了确保每个组件实例可以维护一份被返回对象的独立的拷贝，避免数据之间的相互影响。
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style scoped lang="scss">
.input-number-container {
  width: 300px;
  margin: 100px auto;
}
</style>
