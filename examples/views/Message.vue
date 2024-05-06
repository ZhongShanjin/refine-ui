<template>
  <div class="wrapper">
    <r-button type="" @click="showMessage5"> defualt </r-button>
    <r-button type="danger" icon="chahao" @click="showMessage1">
      error
    </r-button>
    <r-button type="success" icon="gou1" @click="showMessage2">
      success
    </r-button>
    <r-button type="info" icon="info" @click="showMessage3"> info </r-button>
    <r-button type="warning" icon="warn" @click="showMessage4">
      warning
    </r-button>
  </div>
</template>

<script>
export default {
  methods: {
    showMessage1() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "left",
        type: "error",
      });
    },
    showMessage2() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "center",
        type: "success",
      });
    },
    showMessage3() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 30000,
        position: "right",
        type: "info",
      });
    },
    showMessage4() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "right",
        type: "warning",
      });
    },
    showMessage5() {
      this.$message({
        message: "我是一个message 消息提示",
        duration: 3000,
        position: "left",
        type: "",
      });
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 使用视口高度确保div至少和视口一样高 */
  margin: 0; /* 移除默认的body边距 */
}
</style>
