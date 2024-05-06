<template>
  <transition name="message-fade">
    <div
      class="r-message"
      :class="computedClass"
      :style="computedStyle"
      v-if="visible"
    >
      <div class="r-message__content">
        <span v-if="type">
          <r-icon :name="getIconName"></r-icon>
        </span>
        {{ message }}
        <span class="close-btn" @click="closeMessage">
          <r-icon name="close"></r-icon>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
    },
    duration: {
      type: Number,
      default: 3000,
    },
    autoClose: {
      type: Boolean,
      default: true,
    },
    position: {
      type: String,
      default: "right",
    },
    type: {
      type: String,
      validator: (value) => {
        const allowedTypes = ["", "success", "error", "info", "warning"];
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
  },
  data() {
    return {
      visible: false,
      verticalTop: 0,
      baseOffset: 16,
    };
  },
  mounted() {
    if (this.autoClose) {
      this.startTimer();
    }

    this.createElment();
  },
  methods: {
    createElment() {
      this.visible = true;
      document.body.appendChild(this.$el);
    },
    closeMessage() {
      this.visible = false;
    },
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);
      //它在组件开始销毁过程之前触发。
      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer); //清除之前通过setTimeout设置的定时器
        timer = null;
      });
    },
  },
  computed: {
    getIconName() {
      const ICONS = {
        success: "gou1",
        error: "chahao",
        info: "info",
        warning: "warn",
      };
      return ICONS[this.type];
    },
    computedClass() {
      return {
        [`r-message--${this.type}`]: this.type,
      };
    },
    computedStyle() {
      return {
        top: this.verticalTop + "px",
        ...(this.LR_POSTION && {
          [`${this.position}`]: this.baseOffset + "px",
        }),
        ...(this.CENTER_POSTION && {
          left: "50%",
          marginLeft: "-190px",
        }),
      };
    },
    LR_POSTION() {
      return this.position === "left" || this.position === "right";
    },
    CENTER_POSTION() {
      return this.position === "center";
    },
  },
  beforeDestroy() {
    //在这个Vue组件被销毁之前，将它的根元素从DOM中移除。
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        //当CSS过渡结束时，会触发这个事件。监听器的回调函数中调用this.$destroy()，这会手动销毁Vue组件实例，执行必要的清理工作。
        this.$el.addEventListener("transitionend", () => {
          this.$destroy();
        });
        //调用this.$destroy()会触发组件的beforeDestroy和destroyed生命周期钩子。
        //使用this.$emit向外部发射一个close事件。这允许父组件或其他监听这个事件的实例能够响应组件的关闭动作。
        this.$emit("close");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
