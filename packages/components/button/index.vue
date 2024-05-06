<template>
  <!-- 设置按钮的基础样式 -->
  <!-- 根据disabled属性禁用或启用按钮 -->
  <!-- 动态绑定计算属性styleClass返回的类名 -->
  <!-- 绑定点击事件到handleClick方法 -->
  <button class="r-button" :class="styleClass" @click="handleClick($event)">
    <span v-if="icon">
      <!-- 如果icon属性存在，则显示图标 -->
      <r-icon :name="icon"></r-icon>
      <!-- 使用r-icon组件显示图标，图标名由icon属性提供 -->
    </span>

    <slot></slot>
    <!-- 默认插槽，用于插入按钮文本或其他内容 -->
  </button>
</template>

<script>
export default {
  name: "r-button", // 组件名称
  props: {
    // 定义组件接收的props
    type: {
      // 按钮类型（如'primary'），并提供验证器确保值有效
      type: String,
      default: "",
      validator: (value) => {
        const allowedTypes = [
          "",
          "primary",
          "success",
          "warning",
          "danger",
          "info",
        ];
        const isValid = allowedTypes.includes(value);
        if (!isValid) {
          console.warn(
            `Invalid 'type' value: '${value}'. Use one of: ${allowedTypes.join(
              ", "
            )}.`
          ); // 使用警告
        }
        return isValid;
      },
    },
    disabled: {
      // 是否禁用按钮
      type: Boolean,
      default: false,
    },
    round: {
      // 是否为圆角按钮
      type: Boolean,
      default: false,
    },
    icon: {
      // 按钮图标
      type: String,
      default: "",
    },
    size: {
      // 按钮类型（如'primary'），并提供验证器确保值有效
      type: String,
      default: "",
      validator: (value) => {
        const allowedTypes = ["", "medium", "mini", "small"];
        const isValid = allowedTypes.includes(value);
        if (!isValid) {
          console.warn(
            `Invalid 'size' value: '${value}'. Use one of: ${allowedTypes.join(
              ", "
            )}.`
          ); // 使用警告
        }
        return isValid;
      },
    },
  },
  computed: {
    // 计算属性
    styleClass() {
      // 根据type、round和disabled属性动态返回类名
      // 使用[]允许在对象属性名中插入变量或表达式的结果
      return {
        [`r-button--${this.type}`]: this.type,
        "is-round": this.round,
        "is-disabled": this.disabled,
        [`r-button--${this.size}`]: this.size,
      };
    },
  },
  methods: {
    // 方法
    handleClick($event) {
      // 点击按钮时触发的方法
      this.$emit("click", $event); // 向父组件派发click事件
    },
  },
};
</script>
<!-- 导入组件专属样式 -->
<style scoped>
@import "./style.scss";
</style>
