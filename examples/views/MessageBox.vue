<template>
  <div class="wrapper">
    <r-button
      type="primary"
      @click="showMessageBox1"
    >确认取消</r-button>
    <r-button
      type="primary"
      @click="showMessageBox2"
    >确认</r-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessageBox1() {
      this.$confirm({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
          // alert("onOk");
        },
        onCancel: () => {
          // alert("onCancle");
        }
      });
    },
    showMessageBox2() {
      this.$alert({
        title: "我是标题",
        content: "我是内容",
        onOk: () => {
          // alert("onOk");
        },
        onCancel: () => {
          // alert("onCancle");
        }
      });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 使用视口高度确保div至少和视口一样高 */
  margin: 0; /* 移除默认的body边距 */
}
</style>