<template>
  <!-- 将表单控件放置在<label>元素内部建立关联 -->
  <label class="r-checkbox">
    <span class="r-checkbox--outer">
      <span
        class="r-checkbox--inner"
        :class="{ 'is-checked': isChecked }"
      ></span>
      <input
        type="checkbox"
        class="r-checkbox-native"
        :value="label"
        v-model="CKValue"
      />
    </span>

    <span class="r-checkbox__label">
      {{ label }}
    </span>
  </label>
</template>

<script>
export default {
  name: "r-checkbox",
  inject: {
    CKGroup: {
      default: "", // 从父组件注入CKGroup，如果没有提供，则默认为空字符串
    },
  },
  props: {
    label: String, // 用于显示和值绑定的标签
    value: [Boolean, Array], // 可以是布尔值或数组，用于控制复选框的选中状态
  },
  computed: {
    isChecked() {
      if (this.isGroup || this.isGroup == "") {
        // console.log("isChecked");
        return this.CKGroup.value.includes(this.label);
      } else {
        if (typeof this.value === "boolean") {
          // console.log("isvalue");
          return this.value;
        } else {
          // console.log("isnotvalue");
          return this.value.includes(this.label);
        }
      }
    },
    isGroup() {
      // console.log("isGroup");
      return this.CKGroup.value; //一旦 isGroup 的值被计算并且不再发生变化，Vue.js 会将其缓存起来，因此后续访问 isGroup 时不会再触发 get/set 方法，而是直接返回缓存的值
    },
    CKValue: {
      get() {
        // console.log(this.isGroup);
        return this.isGroup ? this.CKGroup.value : this.value;
      },
      set(value) {
        // console.log("set");
        if (this.isGroup) {
          // console.log(this.CKGroup.value, value, this.label);
          this.CKGroup.$emit("input", value); //不会直接更新
          this.CKGroup.$parent.$emit("validate");
        } else {
          this.$emit("input", value);
          this.$parent.$emit("validate");
        }
      },
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
