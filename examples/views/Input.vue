<template>
  <div class="input-wrapper">
    <r-input
      clearable
      type="textarea"
      placeholder="请输入文字"
      :value="msg2"
      @input="(data) => (msg2 = data)"
    >
    </r-input>

    <r-input
      disabled
      center
      size="small"
      type="textarea"
      placeholder="请输入文字"
      :value="msg5"
      @input="(data) => (msg5 = data)"
    >
    </r-input>

    <r-input
      type="text"
      placeholder="请输入姓名"
      :value="msg1"
      @input="(data) => (msg1 = data)"
    >
    </r-input>

    <r-input
      disabled
      size="medium"
      :value="msg3"
      @input="(data) => (msg3 = data)"
    >
      <template slot="prepend">https://</template>
      <template slot="append">.com</template>
    </r-input>

    <r-input
      clearable
      center
      size="small"
      :value="msg4"
      @input="(data) => (msg4 = data)"
    >
      <template slot="append">.com</template>
    </r-input>
    <h1>{{ msg1 }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: "text",
      msg2: "textarea",
      msg3: "前缀 后缀 size=medium disabled",
      msg4: "size=small 后缀  clearable center",
      msg5: "center disabled",
    };
  },
};
</script>

<style scoped lang="scss">
.input-wrapper {
  width: 480px;
  margin: 100px auto;
}
</style>