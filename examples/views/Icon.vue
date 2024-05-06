<template>
  <div class="icon-container-center">
    <r-icon name="gou1" @click="handlerClick"></r-icon>
    <r-icon name="loading" @click="handlerClick"></r-icon>
    <r-icon name="chahao" @click="handlerClick"></r-icon>
    <r-icon name="jia" @click="handlerClick"></r-icon>
    <r-icon name="jian" @click="handlerClick"></r-icon>
    <r-icon name="close" @click="handlerClick"></r-icon>
    <r-icon name="warn" @click="handlerClick"></r-icon>
  </div>
</template>

<script>
export default {
  methods: {
    handlerClick($event) {
      alert("icon");
    },
  },
};
</script>

<style scoped>
.icon-container-center {
  display: flex; /* 启用Flexbox布局 */
  flex-direction: column; /* 项目沿着垂直方向排列 */
  align-items: center; /* 水平居中对齐项目 */
  justify-content: center; /* 垂直居中对齐项目 */
  min-height: 100vh; /* 确保容器至少和视口一样高 */
  width: 100%; /* 宽度占满整个容器 */
}
</style>
