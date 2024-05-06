<template>
  <div class="button-container-center">
    <r-button type="" @click="handleClick">defualt</r-button>
    <r-button type="primary" disabled @click="handleClick">primary</r-button>
    <r-button type="success" round @click="handleClick">success</r-button>
    <r-button type="warning" icon="info" size="medium" @click="handleClick"
      >warning</r-button
    >
    <r-button type="danger" size="small" @click="handleClick">danger</r-button>
    <r-button type="info" size="mini" @click="handleClick">info</r-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick($event) {
      // console.log($event.target.classList.value);
      if ($event.target.classList.value.includes("is-disabled")) {
        return;
      } else {
        alert($event.target.classList.value);
      }
    },
  },
};
</script>

<style scoped>
.button-container-center {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  min-height: 100vh; /* 使用视口高度确保div至少和视口一样高 */
  margin: 0; /* 移除默认的body边距 */
}
</style>
