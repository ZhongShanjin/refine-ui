<template>
  <div class="inline-container">
    <template v-if="type === 'textarea'">
      <textarea
        class="r-textarea"
        :disabled="disabled"
        :class="styleClass"
        v-bind="$attrs"
        v-on="MyListeners"
        v-model="inputValue"
      ></textarea>
    </template>

    <template v-else>
      <div class="inline-container" :class="className">
        <div class="r-input-prepend" v-if="$slots.prepend">
          <slot name="prepend"></slot>
        </div>
        <div class="r-input-outer">
          <input
            type="text"
            class="r-input"
            :class="styleClass"
            :disabled="disabled"
            v-bind="$attrs"
            v-on="MyListeners"
            v-model="inputValue"
          />
          <span class="r-input-clear" @click="clearInput" v-if="showClear">
            <r-icon name="chahao"></r-icon>
          </span>
        </div>

        <div class="r-input-append" v-if="$slots.append">
          <slot name="append"></slot>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "r-input",
  props: {
    value: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
      validator: (value) => {
        const allowedTypes = ["text", "textarea"];
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
    size: {
      type: String,
      default: "",
      validator: (value) => {
        const allowedTypes = ["", "medium", "small"];
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
    clearable: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
        this.$parent.$emit("validate");
      },
    },
    //使用v-bind="$attrs"，你可以确保所有从父组件传递给你的组件的额外属性都会被透明地传递给内部的<input>元素，无需手动声明和传递每个属性。
    // 返回一个对象。这个对象是当前组件监听到的所有父组件事件。Object.assign()尝试将自定义的input事件监听器合并到所有父组件传递给该组件的事件监听器中。当input事件触发时，这个监听器会接收事件对象event，从中取出event.target.value，然后通过$emit发射一个新的input事件，并将获取的值作为参数传递。
    MyListeners() {
      return Object.assign(this.$listeners, {
        input: (event) => this.$emit("input", event.target.value),
      });
    },
    showClear() {
      return this.clearable && this.inputValue !== "" && !this.disabled;
    },
    styleClass() {
      return {
        "is-disabled": this.disabled,
        "is-center": this.center,
        [`r-input--${this.size}`]: this.size,
      };
    },
    className() {
      return {
        "has-prepend": this.$slots.prepend,
        "has-append": this.$slots.append,
      };
    },
  },
  methods: {
    clearInput() {
      this.inputValue = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
