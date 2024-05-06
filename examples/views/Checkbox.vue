<template>
  <div class="checkbox-container-center">
    <!-- $event也用来接收由子组件通过this.$emit触发的事件携带的值 -->
    <r-checkbox-group :value="hobby" @input="hobby = $event">
      <r-checkbox label="篮球">篮球</r-checkbox>
      <r-checkbox label="足球">足球</r-checkbox>
      <r-checkbox label="乒乓球">乒乓球</r-checkbox>
    </r-checkbox-group>

    <p>您选择的爱好是:{{ hobby }}</p>
    <r-checkbox label="单选" v-model="checked"></r-checkbox>
    <p v-if="checked">选中</p>
    <p v-else>未选中</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hobby: ["足球"],
      checked: true,
    };
  },
};
</script>
<style scoped>
.checkbox-container-center {
  display: flex; /* 启用Flexbox布局 */
  flex-direction: column; /* 项目沿着垂直方向排列 */
  align-items: center; /* 水平居中对齐项目 */
  justify-content: center; /* 垂直居中对齐项目 */
  min-height: 100vh; /* 确保容器至少和视口一样高 */
  width: 100%; /* 宽度占满整个容器 */
}
</style>