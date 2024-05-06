<template>
  <div class="input-number-inner">
    <r-input
      v-model="inputValue"
      center
      :disabled="disabled"
      @change="handleChange"
    >
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': decreaseDisabled }"
        slot="prepend"
        @click="handleClick('decrease')"
      >
        <r-icon name="jian"></r-icon>
      </div>
      <div
        class="cursor-pointer"
        :class="{ 'is-disabled': increaseDisabled }"
        slot="append"
        @click="handleClick('increase')"
      >
        <r-icon name="jia"></r-icon>
      </div>
    </r-input>
  </div>
</template>

<script>
// import { get } from "core-js/core/dict";

export default {
  name: "r-inputnumber",
  props: {
    value: {
      type: [Number, String],
    },
    step: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: +Infinity,
    },
    min: {
      type: Number,
      default: -Infinity,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    precision: {
      type: Number,
    },
  },
  computed: {
    inputValue: {
      get() {
        // console.log("get");
        return this.value;
      },
      set(newValue) {
        // console.log("set");
        let { max, min, inputValue } = this;

        //验证规则
        let limit = [
          {
            validate: (value) => !this.isNumber(value),
            res: inputValue,
          },
          {
            validate: (value) => value >= max,
            res: max,
          },
          {
            validate: (value) => value <= min,
            res: min,
          },
          {
            validate: (value) => true,
            res: newValue * 1,
          },
        ];

        //找到第一个true并返回res
        let _value = limit.find((v) => v.validate(newValue)).res;
        //toFixed返回字符串
        // console.log("newValue:" + newValue, ", _value:" + _value);
        this.$emit("input", _value.toFixed(this.precision));
      },
    },
    decreaseDisabled() {
      return this.disabled || this.inputValue <= this.min;
    },
    increaseDisabled() {
      return this.disabled || this.inputValue >= this.max;
    },
  },
  mounted() {
    this.adjustValueWithinRange();
  },
  methods: {
    adjustValueWithinRange() {
      // console.log("adjusr");
      let value = Number(this.value); // 确保value是数字类型
      if (this.isNumber(value)) {
        if (value < this.min) {
          this.inputValue = this.min;
        } else if (value > this.max) {
          this.inputValue = this.max;
        } else {
          this.inputValue = value.toFixed(this.precision);
        }
      }
    },
    handleClick(type) {
      if (type === "increase") {
        if (this.increaseDisabled) return;
        this.inputValue = Number(this.inputValue) + this.step;
      } else {
        if (this.decreaseDisabled) return;
        this.inputValue = Number(this.inputValue) - this.step;
      }
    },
    //isNaN函数用于检测一个值是否为NaN（Not-a-Number）
    //Object.prototype.toString.call(value)是一个JavaScript技巧，用于获取值的内部[[Class]]属性，以精确判断值的类型。
    //isNaN('NaN' * 1)的结果是true, Object.prototype.toString.call('NaN' * 1);的结果是"[object Number]"
    isNumber(num) {
      return (
        !isNaN(num * 1) &&
        Object.prototype.toString.call(num * 1) === "[object Number]"
      );
    },
    handleChange() {
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
.input-number-inner {
  width: 150px;
}
</style>
