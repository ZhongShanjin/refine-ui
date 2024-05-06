<template>
  <div class="wrapper">
    <r-button type="primary" @click="showToast1"
      >点击出现Toast,有onClose</r-button
    >
    <r-button type="primary" @click="showToast2"
      >点击出现Toast,无onClose</r-button
    >
  </div>
</template>

<script>
export default {
  methods: {
    showToast1() {
      this.$toast({
        message: "hello world1!",
        duration: 3000,
        onClose: () => {
          alert("关闭了");
        },
      });
    },
    showToast2() {
      this.$toast({
        message: "hello world2!",
        duration: 3000,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 使用视口高度确保div至少和视口一样高 */
  margin: 0; /* 移除默认的body边距 */
}
</style>
